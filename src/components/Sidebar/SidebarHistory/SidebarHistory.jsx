import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHistory({ isSidebarOpen }) {
    return (
        <a href="" className={`${styles.sidebarLink} ${isSidebarOpen ? styles.sidebarLink : styles.sidebarClosed}`}>
            <SidebarIcons.history />
            <p>Video đã xem</p>
        </a>
    );
}

export default SidebarHistory;
