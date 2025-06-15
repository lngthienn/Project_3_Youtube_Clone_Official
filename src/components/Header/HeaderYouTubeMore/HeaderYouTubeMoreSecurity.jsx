import styles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreSecurity() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.security />
                </i>
                <p>{t('header.headerSettings.headerSettingsSecurity')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreSecurity;
