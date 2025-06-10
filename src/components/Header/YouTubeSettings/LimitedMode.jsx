import styles from '../../../style/components/Header/YouTubeSettings/LimitedMode.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function LimitedMode() {
    return (
        <div className={styles.limitedMode}>
            <i>
                <YouTubeSettingsIcons.limitedMode />
            </i>
            <p>Giao diện: Sáng</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default LimitedMode;
