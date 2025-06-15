import headerYouTubeMoreCompsStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import headerYouTubeMoreThemeStyles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreTheme.module.scss';
import clsx from 'clsx';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function HeaderYouTubeMoreTheme() {
    const { t } = useTranslation();
    const [chooseTheme, setChooseTheme] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');

    const handleChooseTheme = () => {
        setChooseTheme((prev) => !prev);
    };

    const handleChangeTheme = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem('theme', theme);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setChooseTheme(false);
    };
    const themeModeList = t('header.headerSettings.headerSettingsTheme.mode', { returnObjects: true }) || [];

    return (
        <section
            className={clsx(
                headerYouTubeMoreCompsStyles.headerYouTubeMoreComps,
                headerYouTubeMoreThemeStyles.headerYouTubeMoreTheme,
            )}
        >
            <div onClick={handleChooseTheme}>
                <i>
                    <HeaderYouTubeMoreIcons.theme />
                </i>
                <p>{t('header.headerSettings.headerSettingsTheme.status.light')}</p>
                <i>
                    <HeaderYouTubeMoreIcons.next />
                </i>
            </div>
            {chooseTheme && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <HeaderYouTubeMoreIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsTheme.title')}</h2>
                    </section>
                    <ul>
                        {themeModeList.map(({ key, label }) => (
                            <li
                                key={key}
                                onClick={() => handleChangeTheme(key)}
                                className={selectedTheme === key ? 'active-theme' : ''}
                            >
                                {selectedTheme === key && <span>✔️</span>}
                                <p>{label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeMoreTheme;
