import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSubscriptions({ isSidebarOpen }) {
    return (
        <a href="" className={`${styles.sidebarLink} ${isSidebarOpen ? styles.sidebarLink : styles.sidebarClosed}`}>
            <SidebarIcons.subscriptions />
            <p>Kênh đăng ký</p>
        </a>
    );
}

export default SidebarSubscriptions;
