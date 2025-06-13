import styles from '../../../style/layout/Sidebar.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarSendFeedback() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="" className={styles.sidebarLinkOpen}>
            <SidebarIcons.sendFeedback />
            <p>{translations[currentLanguage].sidebar.sidebarSendFeedback}</p>
        </a>
    );
}

export default SidebarSendFeedback;
