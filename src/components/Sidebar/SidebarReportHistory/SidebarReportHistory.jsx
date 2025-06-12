import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarReportHistory() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.reportHistory />
            <p>Nhật ký báo cáo</p>
        </a>
    );
}

export default SidebarReportHistory;
