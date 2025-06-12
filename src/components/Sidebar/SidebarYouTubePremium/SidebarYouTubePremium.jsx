import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarYouTubePremium() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.youtubePremium style={{ color: 'red' }} />
            <p>Youtube Premium</p>
        </a>
    );
}

export default SidebarYouTubePremium;
