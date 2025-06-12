import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSettings() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.settings />
            <p>Cài đặt</p>
        </a>
    );
}

export default SidebarSettings;
