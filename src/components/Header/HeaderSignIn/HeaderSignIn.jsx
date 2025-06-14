import styles from '../../../style/components/Header/HeaderSignIn/HeaderSignIn.module.scss';
import { LoginIcons } from '../../../assets/Header/Login/LoginIcons';
import { useTranslation } from 'react-i18next';

function HeaderSignIn() {
    const { t } = useTranslation();

    return (
        <section className={styles.login}>
            <a href="https://accounts.google.com/" title="Đăng nhập">
                <LoginIcons.button />
                <p>{t('header.signIn')}</p>
            </a>
        </section>
    );
}

export default HeaderSignIn;
