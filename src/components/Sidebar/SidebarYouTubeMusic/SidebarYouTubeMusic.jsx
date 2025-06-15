import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarYouTubeMusic() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubeMusic style={{ color: 'red' }} />
            <p>{t('sidebar.sidebarYouTubeMusic')}</p>
        </a>
    );
}

export default SidebarYouTubeMusic;
