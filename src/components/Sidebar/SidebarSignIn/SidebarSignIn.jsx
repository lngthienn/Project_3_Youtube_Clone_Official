import styles from '../../../style/components/Sidebar/SidebarSignIn/SidebarSignIn.module.scss';
import { SidebarIcons } from '../../../assets/Sidebar/SidebarIcons';

function SidebarSignIn() {
    return (
        <button className={styles.sidebarSignIn}>
            <SidebarIcons.signIn />
            <p>Đăng nhập</p>
        </button>
    );
}

export default SidebarSignIn;
