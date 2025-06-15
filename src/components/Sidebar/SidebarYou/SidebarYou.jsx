import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarYou({ isSidebarOpen }) {
    const { t } = useTranslation();

    return (
        <a href="" className={isSidebarOpen ? styles.sidebarLinkOpen : styles.sidebarLinkClosed}>
            <SidebarIcons.you />
            <p>{t('sidebar.sidebarYou')}</p>
        </a>
    );
}

export default SidebarYou;
