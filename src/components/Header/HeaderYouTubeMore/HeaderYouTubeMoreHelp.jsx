import styles from '../../../styles/components/Header/HeaderYouTubeSettings/HeaderYouTubeSettings.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreHelp() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.help />
                </i>
                <p>{t('header.headerSettings.headerSettingsHelp')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreHelp;
