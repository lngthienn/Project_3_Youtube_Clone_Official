import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarYouTubeKids() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubeKids style={{ color: 'red' }} />
            <p>{t('sidebar.sidebarYouTubeKids')}</p>
        </a>
    );
}

export default SidebarYouTubeKids;
