import styles from '../../../styles/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreSettings() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.settings />
                </i>
                <p>{t('header.headerSettings.headerSettingsSettings')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreSettings;
