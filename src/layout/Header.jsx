import styles from '../styles/layout/Header.module.scss';
import {
    HeaderSidebarButton,
    HeaderLogo,
    HeaderDisplayLocation,
    HeaderSearch,
    HeaderVoiceSearch,
    HeaderYouTubeMore,
    HeaderSignIn,
} from '../components/Header/HeaderImports';

function Header({ toggleSidebar }) {
    return (
        <header className={styles.header}>
            <div>
                <HeaderSidebarButton toggleSidebar={toggleSidebar} />
                <HeaderLogo />
                <HeaderDisplayLocation />
            </div>
            <div>
                <div>
                    <HeaderSearch />
                </div>
                <div>
                    <HeaderVoiceSearch />
                </div>
            </div>
            <div>
                <HeaderYouTubeMore />
                <HeaderSignIn />
            </div>
        </header>
    );
}

export default Header;
