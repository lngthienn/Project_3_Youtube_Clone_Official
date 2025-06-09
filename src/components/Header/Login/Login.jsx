import styles from '../../../style/components/Header/Login/Login.module.scss';
import { LoginIcons } from '../../../assets/Header/Login/LoginIcons';

function Login() {
    return (
        <button className={styles.login} title="Đăng nhập">
            <LoginIcons.button style={{ fontSize: '20px' }} />
            <p>Đăng nhập</p>
        </button>
    );
}

export default Login;
