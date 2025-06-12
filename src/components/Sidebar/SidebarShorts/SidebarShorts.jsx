import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarShorts({ isSidebarOpen }) {
    return (
        <a href="" className={`${styles.sidebarLink} ${isSidebarOpen ? styles.sidebarLink : styles.sidebarClosed}`}>
            <SidebarIcons.shorts />
            <p>Shorts</p>
        </a>
    );
}

export default SidebarShorts;
