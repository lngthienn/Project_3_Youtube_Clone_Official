import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYou({ isSidebarOpen }) {
    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.you />
            <p>Bạn</p>
        </a>
    );
}

export default SidebarYou;
