import styles from '../style/layout/Header.module.scss';
import {
    HeaderDisplayLocation,
    HeaderSignIn,
    HeaderSidebarButton,
    HeaderLogo,
    HeaderVoiceSearch,
    HeaderYouTubeSettings,
} from '../components/Header/index';

import { HeaderSearchInput, HeaderSearchButton } from '../components/Header/HeaderSearch/headerSearchIndex';

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
                    <div>
                        <HeaderSearchInput />
                    </div>
                    <div>
                        <HeaderSearchButton />
                    </div>
                </div>
                <div>
                    <HeaderVoiceSearch />
                </div>
            </div>
            <div>
                <HeaderYouTubeSettings />
                <HeaderSignIn />
            </div>
        </header>
    );
}

export default Header;
