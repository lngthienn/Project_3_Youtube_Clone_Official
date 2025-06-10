import styles from '../../../style/components/Header/YouTubeSettings/Help.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Help() {
    return (
        <div className={styles.help}>
            <i>
                <YouTubeSettingsIcons.help />
            </i>
            <p>Trợ giúp</p>
        </div>
    );
}

export default Help;
