import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarYouTubeMusic() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubeMusic style={{ color: 'red' }} />
            <p>{translations[currentLanguage].sidebar.sidebarYouTubeMusic}</p>
        </a>
    );
}

export default SidebarYouTubeMusic;
