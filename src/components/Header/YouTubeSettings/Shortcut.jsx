import styles from '../../../style/components/Header/YouTubeSettings/Shortcut.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Shortcut() {
    return (
        <div className={styles.shortcut}>
            <i>
                <YouTubeSettingsIcons.shortcut />
            </i>
            <p>Phím tắt</p>
        </div>
    );
}

export default Shortcut;
