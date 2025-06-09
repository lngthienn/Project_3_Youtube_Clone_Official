import styles from '../../../style/components/Header/Logo/Logo.module.scss';

function Logo() {
    return (
        <a href="/" className={styles.logo}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube Logo"
                />
            </div>
        </a>
    );
}

export default Logo;
