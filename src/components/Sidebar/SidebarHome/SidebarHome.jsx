import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHome({ isSidebarOpen }) {
    return (
        <a href="" className={`${styles.sidebarLink} ${isSidebarOpen ? styles.sidebarLink : styles.sidebarClosed}`}>
            <SidebarIcons.home />
            <p>Trang chủ</p>
        </a>
    );
}

export default SidebarHome;
