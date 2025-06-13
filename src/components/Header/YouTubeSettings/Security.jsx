import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Security() {
    const { t } = useTranslation();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.security />
            </i>
            <p>{t('header.headerSettings.headerSettingsSecurity')}</p>
        </div>
    );
}

export default Security;
