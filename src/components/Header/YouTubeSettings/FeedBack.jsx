import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function FeedBack() {
    const { currentLanguage } = useLanguage();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.feedback />
            </i>
            <p>{translations[currentLanguage].header.headerSettings.headerSettingsSendFeedback}</p>
        </div>
    );
}

export default FeedBack;
