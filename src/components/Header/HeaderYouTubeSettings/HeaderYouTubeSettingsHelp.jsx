import styles from '../../../style/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeSettingsHelp() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.help />
                </i>
                <p>{t('header.headerSettings.headerSettingsHelp')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeSettingsHelp;
