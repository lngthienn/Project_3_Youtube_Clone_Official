import styles from '../../../styles/components/Header/HeaderSignIn/HeaderSignIn.module.scss';
import { HeaderSignInIcons } from '../../../assets/icons/Header/HeaderSignIn/HeaderSignInIcons';
import { useTranslation } from 'react-i18next';

function HeaderSignIn() {
    const { t } = useTranslation();

    return (
        <section className={styles.login}>
            <a href="https://accounts.google.com/" title="Đăng nhập">
                <HeaderSignInIcons.signIn />
                <p>{t('header.signIn')}</p>
            </a>
        </section>
    );
}

export default HeaderSignIn;
