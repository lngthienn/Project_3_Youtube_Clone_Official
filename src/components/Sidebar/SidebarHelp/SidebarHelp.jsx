import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarHelp() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.help />
            <p>{t('sidebar.sidebarHelp')}</p>
        </a>
    );
}

export default SidebarHelp;
