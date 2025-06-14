import styles from '../../../style/components/Header/HeaderLogo/HeaderLogo.module.scss';

function HeaderLogo() {
    return (
        <section className={styles.logo}>
            <a href="/">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube Logo"
                    />
                </div>
            </a>
        </section>
    );
}

export default HeaderLogo;
