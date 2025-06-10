import styles from '../../../style/components/Header/YouTubeSettings/Location.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Location() {
    return (
        <div className={styles.location}>
            <i>
                <YouTubeSettingsIcons.location />
            </i>
            <p>Địa điểm: Việt Nam</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default Location;
