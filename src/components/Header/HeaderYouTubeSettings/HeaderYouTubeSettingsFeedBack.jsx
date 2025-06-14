import styles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeSettingsFeedBack() {
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

export default HeaderYouTubeSettingsFeedBack;
