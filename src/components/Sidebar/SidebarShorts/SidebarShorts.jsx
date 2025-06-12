import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarShorts({ isSidebarOpen }) {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.shorts />
            <p>{translations[currentLanguage].sidebar.sidebarShorts}</p>
        </a>
    );
}

export default SidebarShorts;
