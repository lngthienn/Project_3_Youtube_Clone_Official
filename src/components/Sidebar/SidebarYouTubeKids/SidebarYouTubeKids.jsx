import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarYouTubeKids() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubeKids style={{ color: 'red' }} />
            <p>{translations[currentLanguage].sidebar.sidebarYouTubeKids}</p>
        </a>
    );
}

export default SidebarYouTubeKids;
