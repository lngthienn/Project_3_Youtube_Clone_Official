import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarTrending() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.trending />
            <p>Thịnh hành</p>
        </a>
    );
}

export default SidebarTrending;
