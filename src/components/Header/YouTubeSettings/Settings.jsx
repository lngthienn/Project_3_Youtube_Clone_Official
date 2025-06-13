import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Settings() {
    const { t } = useTranslation();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.settings />
            </i>
            <p>{t('header.headerSettings.headerSettingsSettings')}</p>
        </div>
    );
}

export default Settings;
