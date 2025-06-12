import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarShorts({ isSidebarOpen }) {
    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.shorts />
            <p>Shorts</p>
        </a>
    );
}

export default SidebarShorts;
