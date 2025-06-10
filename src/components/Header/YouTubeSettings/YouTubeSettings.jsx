import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Security from './Security';
import Theme from './Theme';
import Languages from './Languages';
import LimitedMode from './LimitedMode';
import Location from './Location';
import Shortcut from './Shortcut';
import Settings from './Settings';
import Help from './Help';
import FeedBack from './FeedBack';

function YouTubeSettings() {
    const [isSettingsOpen, setIsSettingsOpen] = useState();
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
        <div className={styles.youtubesettings} title="Cài đặt">
            <YouTubeSettingsIcons.button
                onClick={handleOpenSettings}
                onBlur={() => setIsSettingsOpen(false)}
                style={{ cursor: 'pointer', fontSize: '17' }}
            />
            {isSettingsOpen && (
                <section ref={settingsRef}>
                    <div>
                        <Security />
                        <Theme />
                        <Languages />
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
