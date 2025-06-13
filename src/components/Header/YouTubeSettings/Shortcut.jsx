import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function Shortcut() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.shortcut />
                </i>
                <p>{t('header.headerSettings.headerSettingsKeyboardShortcuts')}</p>
            </div>
        </section>
    );
}

export default Shortcut;
