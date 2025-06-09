import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcon } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcon';

function YouTubeSettings() {
    return (
        <div className={styles.youtubesettings} title="Cài đặt">
            <YouTubeSettingsIcon.button />
        </div>
    );
}

export default YouTubeSettings;
