import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/useLanguage';

function SidebarReportHistory() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.reportHistory />
            <p>{translations[currentLanguage].sidebar.sidebarReportHistory}</p>
        </a>
    );
}

export default SidebarReportHistory;
