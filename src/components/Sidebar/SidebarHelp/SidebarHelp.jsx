import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHelp() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.help />
            <p>Gửi ý kiến phản hồi</p>
        </a>
    );
}

export default SidebarHelp;
