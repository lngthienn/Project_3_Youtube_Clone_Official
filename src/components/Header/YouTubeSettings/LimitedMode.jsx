import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function LimitedMode() {
    const { t } = useTranslation();

    return (
        <div className={styles.compsYouTubeSettings}>
            <i>
                <YouTubeSettingsIcons.limitedMode />
            </i>
            <p>{t('header.headerSettings.headerSettingsTheme')}</p>
            <i>
                <YouTubeSettingsIcons.next />
            </i>
        </div>
    );
}

export default LimitedMode;
