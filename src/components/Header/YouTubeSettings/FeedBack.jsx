import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function FeedBack() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.feedback />
                </i>
                <p>{t('header.headerSettings.headerSettingsSendFeedback')}</p>
            </div>
        </section>
    );
}

export default FeedBack;
