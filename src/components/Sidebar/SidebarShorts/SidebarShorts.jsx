import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarShorts({ isSidebarOpen }) {
    const { t } = useTranslation();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.shorts />
            <p>{t('sidebar.sidebarShorts')}</p>
        </a>
    );
}

export default SidebarShorts;
