import headerYouTubeMoreComps from '../../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import headerYouTubeMoreTheme from '../../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreTheme.module.scss';
import headerYouTubeMoreRestrictedMode from '../../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMoreRestrictedMode/HeaderYouTubeMoreRestrictedMode.module.scss';
import HeaderYouTubeMoreRestrictedModeToggle from './HeaderYouTubeMoreRestrictiedModeToggle';
import clsx from 'clsx';
import { HeaderYouTubeMoreIcons } from '../../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function HeaderYouTubeMoreRestrictedMode() {
    const [chooseRestrictedMode, setRestrictedMode] = useState();
    const { t } = useTranslation();

    const handleChooseRestrictedMode = () => {
        setRestrictedMode((prev) => !prev);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setRestrictedMode(false);
    };

    const [restrictedStatus, setRestrictedStatus] = useState(() => {
        return localStorage.getItem('RestrictiedModeStatus') === 'true';
    });

    const handleRestrictedToggle = (newStatus) => {
        setRestrictedStatus(newStatus);
    };

    useEffect(() => {
        const handleStorage = () => {
            const newStatus = localStorage.getItem('RestrictiedModeStatus') === 'true';
            setRestrictedStatus(newStatus);
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return (
        <section
            className={clsx(
                headerYouTubeMoreComps.headerYouTubeMoreComps,
                headerYouTubeMoreTheme.headerYouTubeMoreTheme,
                headerYouTubeMoreRestrictedMode.headerYouTubeMoreRestrictedMode,
            )}
        >
            <div onClick={handleChooseRestrictedMode}>
                <i>
                    <HeaderYouTubeMoreIcons.restrictedMode />
                </i>
                <p>
                    {t('header.headerSettings.headerSettingsRestrictedMode.status')}{' '}
                    {t(`header.headerSettings.headerSettingsRestrictedMode.mode.${restrictedStatus}`)}
                </p>
                <i>
                    <HeaderYouTubeMoreIcons.next />
                </i>
            </div>
            {chooseRestrictedMode && (
                <div>
                    <section>
                        <i onClick={handleClose}>
                            <HeaderYouTubeMoreIcons.back />
                        </i>
                        <h2>{t('header.headerSettings.headerSettingsRestrictedMode.title')}</h2>
                    </section>
                    <div>
                        <div>
                            <p>{t('header.headerSettings.headerSettingsRestrictedMode.description')}</p>
                        </div>
                        <div>
                            <p>{t('header.headerSettings.headerSettingsRestrictedMode.browserNotice')}</p>
                        </div>
                        <section>
                            <HeaderYouTubeMoreRestrictedModeToggle handleRestrictedToggle={handleRestrictedToggle} />
                        </section>
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeMoreRestrictedMode;
