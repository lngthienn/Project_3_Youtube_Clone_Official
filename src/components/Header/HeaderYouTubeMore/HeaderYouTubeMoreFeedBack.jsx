import styles from '../../../styles/components/Header/HeaderYouTubeMore/HeaderYouTubeMore.module.scss';
import { HeaderYouTubeMoreIcons } from '../../../assets/icons/Header/HeaderYouTubeMore/HeaderYouTubeMoreIcons';
import { useTranslation } from 'react-i18next';

function HeaderYouTubeMoreFeedBack() {
    const { t } = useTranslation();

    return (
        <section className={styles.compsYouTubeSettings}>
            <div>
                <i>
                    <HeaderYouTubeMoreIcons.feedback />
                </i>
                <p>{t('header.headerSettings.headerSettingsSendFeedback')}</p>
            </div>
        </section>
    );
}

export default HeaderYouTubeMoreFeedBack;
