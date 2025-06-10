import styles from '../../../style/components/Header/YouTubeSettings/FeedBack.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';

function FeedBack() {
    return (
        <div className={styles.feedBack}>
            <i>
                <YouTubeSettingsIcons.feedback />
            </i>
            <p>Gửi ý kiến phản hồi</p>
        </div>
    );
}

export default FeedBack;
