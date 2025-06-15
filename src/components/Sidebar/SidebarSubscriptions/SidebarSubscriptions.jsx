import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarSubscriptions({ isSidebarOpen }) {
    const { t } = useTranslation();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.subscriptions />
            <p>{t('sidebar.sidebarSubscriptions')}</p>
        </a>
    );
}

export default SidebarSubscriptions;
