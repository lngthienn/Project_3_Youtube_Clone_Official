import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function Shortcut() {
    const { currentLanguage } = useLanguage();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.shortcut />
            </i>
            <p>{translations[currentLanguage].header.headerSettings.headerSettingsKeyboardShortcuts}</p>
        </div>
    );
}

export default Shortcut;
