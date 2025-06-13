import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import themeYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Theme.module.scss';
import clsx from 'clsx';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Languages({ expanded, setExpanded }) {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleClose = (event) => {
        event.stopPropagation();
        setExpanded(false);
    };

    const langList = t('header.headerSettings.headerSettingsLanguagesList', { returnObjects: true }) || [];

    const changeLanguage = (languageCode) => {
        sessionStorage.setItem('language', languageCode);
        i18n.changeLanguage(languageCode);
        console.log('Ngôn ngữ đã được lưu:', sessionStorage.getItem('language'));
    };

    return (
        <section
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                themeYouTubeSettingsStyles.themeYouTubeSettings,
            )}
            onClick={() => setExpanded(true)}
        >
            <div>
                <i>
                    <YouTubeSettingsIcons.languages />
                </i>
                <p>{t('header.headerSettings.headerSettingsLanguage')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
            {expanded && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <YouTubeSettingsIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsLanguagesChoose')}</h2>
                    </section>
                    <ul>
                        {langList.map(({ code, label }) => (
                            <li key={code} onClick={() => changeLanguage(code)}>
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Languages;
