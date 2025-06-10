import styles from '../../../style/components/Header/YouTubeSettings/Languages.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function Languages() {
    return (
        <div className={styles.languages}>
            <i>
                <YouTubeSettingsIcons.languages />
            </i>
            <p>Ngôn ngữ: Tiếng Việt</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default Languages;
