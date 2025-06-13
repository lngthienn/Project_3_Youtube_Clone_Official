import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Security() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.security />
                </i>
                <p>{t('header.headerSettings.headerSettingsSecurity')}</p>
            </div>
        </section>
    );
}

export default Security;
