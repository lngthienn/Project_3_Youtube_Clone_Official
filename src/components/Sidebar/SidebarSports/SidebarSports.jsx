import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSports() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.sports />
            <p>Thể thao</p>
        </a>
    );
}

export default SidebarSports;
