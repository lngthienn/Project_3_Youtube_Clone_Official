import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcon';

function YouTubeSettings() {
    return (
        <div className={styles.youtubesettings} title="Cài đặt">
            <YouTubeSettingsIcons.button />
        </div>
    );
}

export default YouTubeSettings;
