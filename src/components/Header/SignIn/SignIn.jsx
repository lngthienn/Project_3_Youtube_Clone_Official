import styles from '../../../style/components/Header/Login/Login.module.scss';
import { LoginIcons } from '../../../assets/Header/Login/LoginIcons';

function Login() {
    return (
        <a href="https://accounts.google.com/" className={styles.login} title="Đăng nhập">
            <LoginIcons.button />
            <p>Đăng nhập</p>
        </a>
    );
}

export default Login;
