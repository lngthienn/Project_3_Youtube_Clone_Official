import styles from '../../../style/components/Header/YouTubeSettings/YouTubeSettings.module.scss';
import { YouTubeSettingsIcons } from '../../../assets/Header/YouTubeSettings/YouTubeSettingsIcons';
import { useTranslation } from 'react-i18next';

function RestrictedMode() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <YouTubeSettingsIcons.restrictedMode />
                </i>
                <p>{t('header.headerSettings.headerSettingsRestrictedMode')}</p>
                <i>
                    <YouTubeSettingsIcons.next />
                </i>
            </div>
        </section>
    );
}

export default RestrictedMode;
