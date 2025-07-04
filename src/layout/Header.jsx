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

function Header({ handleOpenSidebar }) {
    return (
        <header className={styles.header}>
            <div>
                <HeaderSidebarButton handleOpenSidebar={handleOpenSidebar} />
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
