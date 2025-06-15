import styles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import {
    HeaderYouTubeMoreSecurity,
    HeaderYouTubeMoreTheme,
    HeaderYouTubeMoreLanguages,
    HeaderYouTubeMoreRestrictedMode,
    HeaderYouTubeMoreLocation,
    HeaderYouTubeMoreShortcut,
    HeaderYouTubeSettings,
    HeaderYouTubeMoreHelp,
    HeaderYouTubeMoreFeedBack,
} from './HeaderYouTubeMoreImports';

function HeaderYouTubeMore() {
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
                    <HeaderYouTubeMoreIcons.button onClick={handleOpenSettings} />
                </i>
            </div>
            {isSettingsOpen && (
                <div ref={settingsRef}>
                    <div>
                        <HeaderYouTubeMoreSecurity />
                        <HeaderYouTubeMoreTheme />
                        <HeaderYouTubeMoreLanguages />
                        <HeaderYouTubeMoreRestrictedMode />
                        <HeaderYouTubeMoreLocation />
                        <HeaderYouTubeMoreShortcut />
                    </div>
                    <div>
                        <HeaderYouTubeSettings />
                    </div>
                    <div>
                        <HeaderYouTubeMoreHelp />
                        <HeaderYouTubeMoreFeedBack />
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeaderYouTubeMore;
