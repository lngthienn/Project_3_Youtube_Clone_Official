import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYouTubeMusic() {
    return (
        <a href="" className={styles.sidebarLink}>
            <SidebarIcons.youtubeMusic style={{ color: 'red' }} />
            <p>Youtube Music</p>
        </a>
    );
}

export default SidebarYouTubeMusic;
