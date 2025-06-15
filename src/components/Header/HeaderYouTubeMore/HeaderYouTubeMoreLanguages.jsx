import headerYouTubeMoreCompsStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import headerYouTubeMoreTheme from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreTheme.module.scss';
import clsx from 'clsx';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useState } from 'react';

function HeaderYouTubeMoreLanguages() {
    const [chooseLanguages, setChooseLanguages] = useState();
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleChooseLanguages = () => {
        setChooseLanguages((prev) => !prev);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setChooseLanguages(false);
    };

    const langList = t('header.headerSettings.headerSettingsLanguage.list', { returnObjects: true }) || [];

    const changeLanguage = (languageCode) => {
        sessionStorage.setItem('language', languageCode);
        i18n.changeLanguage(languageCode);
        setSelectedLanguage(languageCode);
    };

    return (
        <section
            className={clsx(
                headerYouTubeMoreCompsStyles.headerYouTubeMoreComps,
                headerYouTubeMoreThemeStyles.headerYouTubeMoreTheme,
            )}
        >
            <div onClick={handleChooseLanguages}>
                <i>
                    <HeaderYouTubeMoreIcons.languages />
                </i>
                <p>{t('header.headerSettings.headerSettingsLanguage.current')}</p>
                <i>
                    <HeaderYouTubeMoreIcons.next />
                </i>
            </div>
            {chooseLanguages && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <HeaderYouTubeMoreIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsLanguage.title')}</h2>
                    </section>
                    <ul>
                        {langList.map(({ code, label }) => (
                            <li key={code} onClick={() => changeLanguage(code)}>
                                {selectedLanguage === code && <span>✔️</span>}
                                <p>{label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeMoreLanguages;
