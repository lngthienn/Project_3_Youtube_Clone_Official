import styles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeSettingsSettings() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.settings />
                </i>
                <p>{t('header.headerSettings.headerSettingsSettings')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeSettingsSettings;
