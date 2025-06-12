import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSendFeedback() {
    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.sendFeedback />
            <p>Gửi ý kiến phản hồi</p>
        </a>
    );
}

export default SidebarSendFeedback;
