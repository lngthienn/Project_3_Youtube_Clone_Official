import youtubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import themeYouTubeSettingsStyles from '../../../style/components/Header/YouTubeSettings/Theme.module.scss';
import clsx from 'clsx';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Theme() {
    const { t } = useTranslation();
    const [chooseTheme, setChooseTheme] = useState(false);

    const handleChooseTheme = () => {
        setChooseTheme((prev) => !prev);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setChooseTheme(false);
    };
    return (
        <section
            onClick={handleChooseTheme}
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                themeYouTubeSettingsStyles.themeYouTubeSettings,
            )}
        >
            <div>
                <i>
                    <YouTubeSettingsIcons.theme />
                </i>
                <p>{t('header.headerSettings.headerSettingsTheme')}</p>
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
                        <h2>Giao diện</h2>
                    </section>
                    <ul>
                        <li>Giao diện tối</li>
                        <li>Giao diện sáng</li>
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Theme;
