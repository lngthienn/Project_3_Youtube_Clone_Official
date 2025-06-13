import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarYou({ isSidebarOpen }) {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.you />
            <p>{translations[currentLanguage].sidebar.sidebarYou}</p>
        </a>
    );
}

export default SidebarYou;
