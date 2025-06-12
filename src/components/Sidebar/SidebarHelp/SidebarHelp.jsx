import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarHelp() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.help />
            <p>Trợ giúp</p>
        </a>
    );
}

export default SidebarHelp;
