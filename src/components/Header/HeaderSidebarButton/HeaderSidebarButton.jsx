import headerSidebarButton from '../../../styles/components/Header/HeaderSidebarButton/HeaderSidebarButton.module.scss';
import { SidebarButtonIcons } from '../../../assets/icons/Header/HeaderSidebarButton/HeaderSidebarButtonIcons';

function HeaderSidebarButton({ handleOpenSidebar }) {
    return (
        <section
            className={headerSidebarButton.headerSidebarButton}
            onClick={handleOpenSidebar}
            title="Mở/Đóng Sidebar"
        >
            <SidebarButtonIcons.button style={{ fontSize: '24' }} />
        </section>
    );
}

export default HeaderSidebarButton;
