import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarSports() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.sports />
            <p>{t('sidebar.sidebarSports')}</p>
        </a>
    );
}

export default SidebarSports;
