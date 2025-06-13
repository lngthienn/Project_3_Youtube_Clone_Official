import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import themeYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Theme.module.scss';
import clsx from 'clsx';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Theme() {
    const { t } = useTranslation();
    const [chooseTheme, setChooseTheme] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');

    const handleChooseTheme = () => {
        setChooseTheme((prev) => !prev);
    };

    const handleChangeTheme = (theme) => {
        setSelectedTheme(theme);
        sessionStorage.setItem('theme', theme);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setChooseTheme(false);
    };
    const themeModeList = t('header.headerSettings.headerSettingsTheme.mode', { returnObjects: true }) || [];

    return (
        <section
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                themeYouTubeSettingsStyles.themeYouTubeSettings,
            )}
        >
            <div onClick={handleChooseTheme}>
                <i>
                    <YouTubeSettingsIcons.theme />
                </i>
                <p>{t('header.headerSettings.headerSettingsTheme.status.light')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
            {chooseTheme && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <YouTubeSettingsIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsTheme.title')}</h2>
                    </section>
                    <ul>
                        {themeModeList.map(({ key, label }) => (
                            <li key={key} onClick={() => handleChangeTheme(key)}>
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

export default Theme;
