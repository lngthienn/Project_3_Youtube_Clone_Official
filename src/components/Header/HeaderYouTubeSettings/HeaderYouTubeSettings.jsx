import styles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
    HeaderYouTubeSettingsSecurity,
    HeaderYouTubeSettingsTheme,
    HeaderYouTubeSettingsLanguages,
    HeaderYouTubeSettingsRestrictedMode,
    HeaderYouTubeSettingsLocation,
    HeaderYouTubeSettingsShortcut,
    HeaderYouTubeSettingsSettings,
    HeaderYouTubeSettingsHelp,
    HeaderYouTubeSettingsFeedBack,
} from './indexYouTubeSettings';

function HeaderYouTubeSettings() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const settingsRef = useRef(null);

    const handleOpenSettings = () => {
        setIsSettingsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (settingsRef.current && !settingsRef.current.contains(e.target)) {
                setIsSettingsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);

    return (
        <section className={styles.headerYouTubeSettings} title="Cài đặt">
            <div>
                <i>
                    <YouTubeSettingsIcons.button onClick={handleOpenSettings} />
                </i>
            </div>
            {isSettingsOpen && (
                <div ref={settingsRef}>
                    <div>
                        <HeaderYouTubeSettingsSecurity />
                        <HeaderYouTubeSettingsTheme />
                        <HeaderYouTubeSettingsLanguages />
                        <HeaderYouTubeSettingsRestrictedMode />
                        <HeaderYouTubeSettingsLocation />
                        <HeaderYouTubeSettingsShortcut />
                    </div>
                    <div>
                        <HeaderYouTubeSettingsSettings />
                    </div>
                    <div>
                        <HeaderYouTubeSettingsHelp />
                        <HeaderYouTubeSettingsFeedBack />
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeSettings;
