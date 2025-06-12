import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarMusic() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.music />
            <p>Âm nhạc</p>
        </a>
    );
}

export default SidebarMusic;
