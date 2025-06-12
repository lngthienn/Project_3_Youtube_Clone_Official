import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYou({ isSidebarOpen }) {
    return (
        <a href="" className={`${styles.sidebarLink} ${isSidebarOpen ? styles.sidebarLink : styles.sidebarClosed}`}>
            <SidebarIcons.you />
            <p>Bạn</p>
        </a>
    );
}

export default SidebarYou;
