import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
    Security,
    Theme,
    Languages,
    LimitedMode,
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
        <div className={styles.youtubeSettings} title="Cài đặt">
            <YouTubeSettingsIcons.button onClick={handleOpenSettings} style={{ cursor: 'pointer', fontSize: '17' }} />
            {isSettingsOpen && (
                <section ref={settingsRef}>
                    <div>
                        <Security />
                        <Theme />
                        <Languages expanded={expanded} setExpanded={setExpanded} />
                        <LimitedMode />
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
                </section>
            )}
        </div>
    );
}

export default YouTubeSettings;
