import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarNews() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.news />
            <p>Tin tức</p>
        </a>
    );
}

export default SidebarNews;
