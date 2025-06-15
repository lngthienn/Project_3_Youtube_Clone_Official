import styles from '../../../styles/components/Sidebar/SidebarSignIn/SidebarSignIn.module.scss';
import { SidebarIcons } from '../../../assets/icons/Sidebar/SidebarIcons';
import { useTranslation } from 'react-i18next';

function SidebarSignIn() {
    const { t } = useTranslation();

    return (
        <button className={styles.sidebarSignIn}>
            <SidebarIcons.signIn />
            <p>{t('sidebar.sidebarSignInButton')}</p>
        </button>
    );
}

export default SidebarSignIn;
