import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarTrending() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.trending />
            <p>{translations[currentLanguage].sidebar.sidebarTrending}</p>
        </a>
    );
}

export default SidebarTrending;
