import styles from '../../../style/components/Header/Login/Login.module.scss';
import { LoginIcons } from '../../../assets/Header/Login/LoginIcons';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();

    return (
        <a href="https://accounts.google.com/" className={styles.login} title="Đăng nhập">
            <LoginIcons.button />
            <p>{t('header.signIn')}</p>
        </a>
    );
}

export default Login;
