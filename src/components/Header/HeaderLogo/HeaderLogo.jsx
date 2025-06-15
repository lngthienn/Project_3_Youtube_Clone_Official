import headerLogo from '../../../styles/components/Header/HeaderLogo/HeaderLogo.module.scss';

function HeaderLogo() {
    return (
        <section className={headerLogo.headerLogo}>
            <div>
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube Logo"
                    />
                </a>
            </div>
        </section>
    );
}

export default HeaderLogo;
