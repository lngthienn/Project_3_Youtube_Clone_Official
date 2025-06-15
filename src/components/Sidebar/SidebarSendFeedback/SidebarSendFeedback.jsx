import styles from '../../../styles/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarSendFeedback() {
    const { t } = useTranslation();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.sendFeedback />
            <p>{t('sidebar.sidebarSendFeedback')}</p>
        </a>
    );
}

export default SidebarSendFeedback;
