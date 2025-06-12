import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarHistory({ isSidebarOpen }) {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.history />
            <p>{translations[currentLanguage].sidebar.sidebarHistory}</p>
        </a>
    );
}

export default SidebarHistory;
