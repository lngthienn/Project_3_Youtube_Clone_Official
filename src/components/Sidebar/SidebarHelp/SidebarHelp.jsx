import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarHelp() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.help />
            <p>{translations[currentLanguage].sidebar.sidebarHelp}</p>
        </a>
    );
}

export default SidebarHelp;
