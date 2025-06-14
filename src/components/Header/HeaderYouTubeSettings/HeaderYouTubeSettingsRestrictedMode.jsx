import youtubeSettingsStyles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import themeYouTubeSettingsStyles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettingsTheme.module.scss';
import clsx from 'clsx';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function HeaderYouTubeSettingsRestrictedMode() {
    const [chooseRestrictedMode, setRestrictedMode] = useState();
    const { t } = useTranslation();

    const handleChooseRestrictedMode = () => {
        setRestrictedMode((prev) => !prev);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setRestrictedMode(false);
    };

    return (
        <section
            className={clsx(
                youtubeSettingsStyles.compsYouTubeSettings,
                themeYouTubeSettingsStyles.themeYouTubeSettings,
            )}
        >
            <div onClick={handleChooseRestrictedMode}>
                <i>
                    <YouTubeSettingsIcons.restrictedMode />
                </i>
                <p>{t('header.headerSettings.headerSettingsRestrictedMode.status')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
            {chooseRestrictedMode && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <YouTubeSettingsIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsRestrictedMode.title')}</h2>
                    </section>
                    <div>
                        <p>{t('header.headerSettings.headerSettingsRestrictedMode.description')}</p>
                    </div>
                    <div>
                        <p>{t('header.headerSettings.headerSettingsRestrictedMode.browserNotice')}</p>
                    </div>
                    <div>{t('header.headerSettings.headerSettingsRestrictedMode.toggleAction')}</div>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeSettingsRestrictedMode;
