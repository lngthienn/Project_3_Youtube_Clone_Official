import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarReportHistory() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.reportHistory />
            <p>{t('sidebar.sidebarReportHistory')}</p>
        </a>
    );
}

export default SidebarReportHistory;
