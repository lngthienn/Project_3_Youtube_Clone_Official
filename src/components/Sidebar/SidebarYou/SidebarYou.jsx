import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYou() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.you />
            <p>Bạn</p>
        </a>
    );
}

export default SidebarYou;
