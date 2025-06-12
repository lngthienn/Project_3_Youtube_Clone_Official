import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarSettings() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.settings />
            <p>{translations[currentLanguage].sidebar.sidebarSettings}</p>
        </a>
    );
}

export default SidebarSettings;
