import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarShorts() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.shorts />
            <p>Shorts</p>
        </a>
    );
}

export default SidebarShorts;
