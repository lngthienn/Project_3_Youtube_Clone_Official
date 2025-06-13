import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarSports() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.sports />
            <p>{translations[currentLanguage].sidebar.sidebarSports}</p>
        </a>
    );
}

export default SidebarSports;
