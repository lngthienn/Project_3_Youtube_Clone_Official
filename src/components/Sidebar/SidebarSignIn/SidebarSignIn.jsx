import styles from '../../../style/components/Sidebar/SidebarSignIn/SidebarSignIn.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context/Languages/useLanguage';

function SidebarSignIn() {
    const { currentLanguage } = useLanguage();

    return (
        <button className={styles.sidebarSignIn}>
            <SidebarIcons.signIn />
            <p>{translations[currentLanguage].sidebar.sidebarSignInButton}</p>
        </button>
    );
}

export default SidebarSignIn;
