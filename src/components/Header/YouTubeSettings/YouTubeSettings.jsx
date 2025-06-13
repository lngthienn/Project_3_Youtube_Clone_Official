import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
    Security,
    Theme,
    Languages,
    RestrictedMode,
    Location,
    Shortcut,
    Settings,
    Help,
    FeedBack,
} from './indexYouTubeSettings';

function YouTubeSettings() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const settingsRef = useRef(null);

    const handleOpenSettings = () => {
        setIsSettingsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (settingsRef.current && !settingsRef.current.contains(e.target)) {
                setIsSettingsOpen(false);
                setExpanded(false);
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
                        <Security />
                        <Theme />
                        <Languages expanded={expanded} setExpanded={setExpanded} />
                        <RestrictedMode />
                        <Location />
                        <Shortcut />
                    </div>
                    <div>
                        <Settings />
                    </div>
                    <div>
                        <Help />
                        <FeedBack />
                    </div>
                </div>
            )}
        </section>
    );
}

export default YouTubeSettings;
