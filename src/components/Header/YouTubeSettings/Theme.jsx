import styles from '../../../style/components/Header/YouTubeSettings/Theme.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Theme() {
    return (
        <div className={styles.theme}>
            <i>
                <YouTubeSettingsIcons.theme />
            </i>
            <p>Giao diện: Sáng</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default Theme;
