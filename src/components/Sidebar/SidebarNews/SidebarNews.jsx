import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarNews() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.news />
            <p>{translations[currentLanguage].sidebar.sidebarNews}</p>
        </a>
    );
}

export default SidebarNews;
