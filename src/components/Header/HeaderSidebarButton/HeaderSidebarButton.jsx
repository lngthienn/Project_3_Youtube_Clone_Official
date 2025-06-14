import styles from '../../../style/components/Header/HeaderSidebarButton/HeaderSidebarButton.module.scss';
import { SidebarButtonIcons } from '../../../assets/Header/SidebarButton/SidebarButtonIcons';

function HeaderSidebarButton({ toggleSidebar }) {
    return (
        <section className={styles.sidebarbutton} onClick={toggleSidebar} title="Mở/Đóng Sidebar">
            <SidebarButtonIcons.button style={{ fontSize: '24' }} />
        </section>
    );
}

export default HeaderSidebarButton;
