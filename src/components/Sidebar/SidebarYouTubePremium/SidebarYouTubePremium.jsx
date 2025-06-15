import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarYouTubePremium() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubePremium style={{ color: 'red' }} />
            <p>{t('sidebar.sidebarYouTubePremium')}</p>
        </a>
    );
}

export default SidebarYouTubePremium;
