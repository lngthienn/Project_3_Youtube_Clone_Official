import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarGaming() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.gaming />
            <p>{t('sidebar.sidebarGaming')}</p>
        </a>
    );
}

export default SidebarGaming;
