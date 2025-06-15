import headerSidebarButton from '../../../styles/components/Header/HeaderSidebarButton/HeaderSidebarButton.module.scss';
import { SidebarButtonIcons } from '../../../assets/icons/Header/HeaderSidebarButton/HeaderSidebarButtonIcons';

function HeaderSidebarButton({ toggleSidebar }) {
    return (
        <section className={headerSidebarButton.headerSidebarButton} onClick={toggleSidebar} title="Mở/Đóng Sidebar">
            <SidebarButtonIcons.button style={{ fontSize: '24' }} />
        </section>
    );
}

export default HeaderSidebarButton;
