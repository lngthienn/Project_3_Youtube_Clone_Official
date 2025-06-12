import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYouTubeKids() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubeKids style={{ color: 'red' }} />
            <p>Youtube Kids</p>
        </a>
    );
}

export default SidebarYouTubeKids;
