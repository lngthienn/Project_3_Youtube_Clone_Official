import styles from '../../../style/components/Header/Login/Login.module.scss';
import { LoginIcons } from '../../../assets/Header/Login/LoginIcons';
import translations from '../../../locales/i18n';
import { useLanguage } from '../../../context//Languages/useLanguage';

function Login() {
    const { currentLanguage } = useLanguage();

    return (
        <a href="https://accounts.google.com/" className={styles.login} title="Đăng nhập">
            <LoginIcons.button />
            <p>{translations[currentLanguage].header.signIn}</p>
        </a>
    );
}

export default Login;
