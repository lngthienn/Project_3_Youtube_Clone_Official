import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSubscriptions({ isSidebarOpen }) {
    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.subscriptions />
            <p>Kênh đăng ký</p>
        </a>
    );
}

export default SidebarSubscriptions;
