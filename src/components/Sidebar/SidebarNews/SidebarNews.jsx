import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarNews() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.news />
            <p>{t('sidebar.sidebarNews')}</p>
        </a>
    );
}

export default SidebarNews;
