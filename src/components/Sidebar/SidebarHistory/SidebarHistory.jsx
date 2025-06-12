import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHistory({ isSidebarOpen }) {
    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.history />
            <p>Video đã xem</p>
        </a>
    );
}

export default SidebarHistory;
