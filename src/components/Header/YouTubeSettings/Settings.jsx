import styles from '../../../style/components/Header/YouTubeSettings/Settings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Settings() {
    return (
        <div className={styles.settings}>
            <i>
                <YouTubeSettingsIcons.settings />
            </i>
            <p>Cài đặt</p>
        </div>
    );
}

export default Settings;
