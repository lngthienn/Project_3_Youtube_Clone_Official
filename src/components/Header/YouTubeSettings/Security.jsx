import styles from '../../../style/components/Header/YouTubeSettings/Security.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Security() {
    return (
        <div className={styles.security}>
            <i>
                <YouTubeSettingsIcons.security />
            </i>
            <p>Dữ liệu của bạn trong YouTube</p>
        </div>
    );
}

export default Security;
