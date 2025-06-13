import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Help() {
    const { t } = useTranslation();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.help />
            </i>
            <p>{t('header.headerSettings.headerSettingsHelp')}</p>
        </div>
    );
}

export default Help;
