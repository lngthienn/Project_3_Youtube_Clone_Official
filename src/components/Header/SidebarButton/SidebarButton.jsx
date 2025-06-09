import styles from '../../../style/components/Header/SidebarButton/SidebarButton.module.scss';
import { SidebarButtonIcon } from '../../../assets/Header/SidebarButton/SidebarButtonIcon';

function SidebarButton({ toggleSidebar }) {
    return (
        <div className={styles.sidebarbutton} onClick={toggleSidebar} title="Mở/Đóng Sidebar">
            <SidebarButtonIcon.button style={{ fontSize: '24' }} />
        </div>
    );
}

export default SidebarButton;
