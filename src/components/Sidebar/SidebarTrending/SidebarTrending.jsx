import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarTrending() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.trending />
            <p>{t('sidebar.sidebarTrending')}</p>
        </a>
    );
}

export default SidebarTrending;
