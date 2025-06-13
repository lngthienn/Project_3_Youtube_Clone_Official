import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Location() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.location />
                </i>
                <p>{t('header.headerSettings.headerSettingsLocation')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
        </section>
    );
}

export default Location;
