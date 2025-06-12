import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHistory() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.history />
            <p>Video đã xem</p>
        </a>
    );
}

export default SidebarHistory;
