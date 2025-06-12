import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarSubscriptions({ isSidebarOpen }) {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.subscriptions />
            <p>{translations[currentLanguage].sidebar.sidebarSubscriptions}</p>
        </a>
    );
}

export default SidebarSubscriptions;
