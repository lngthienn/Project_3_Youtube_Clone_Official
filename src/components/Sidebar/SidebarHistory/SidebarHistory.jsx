import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarHistory({ isSidebarOpen }) {
    const { t } = useTranslation();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.history />
            <p>{t('sidebar.sidebarHistory')}</p>
        </a>
    );
}

export default SidebarHistory;
