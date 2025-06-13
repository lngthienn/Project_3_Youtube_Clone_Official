import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import languagesYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Languages.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
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
        <div
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                languagesYouTubeSettingsStyles.languagesYouTubeSettings,
            )}
            onClick={() => setExpanded(true)}
        >
            <i>
                <YouTubeSettingsIcons.languages />
            </i>
            <p>{t('header.headerSettings.headerSettingsLanguage')}</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>

            {expanded && (
                <div>
                    <div>
                        <i onClick={handleClose}>
                            <IoMdArrowBack />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsLanguagesChoose')}</h2>
                    </div>
                    <ul>
                        {langList.map(({ code, label }) => (
                            <li key={code} onClick={() => changeLanguage(code)}>
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Languages;
