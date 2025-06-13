import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function Location() {
    const { currentLanguage } = useLanguage();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.location />
            </i>
            <p>{translations[currentLanguage].header.headerSettings.headerSettingsLocation}</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default Location;
