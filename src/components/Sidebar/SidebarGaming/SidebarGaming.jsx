import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarGaming() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.gaming />
            <p>Trò chơi</p>
        </a>
    );
}

export default SidebarGaming;
