import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarGaming() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.gaming />
            <p>{translations[currentLanguage].sidebar.sidebarGaming}</p>
        </a>
    );
}

export default SidebarGaming;
