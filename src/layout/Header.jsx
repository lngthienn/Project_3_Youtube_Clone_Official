import styles from '../style/layout/Header.module.scss';
import { SidebarButton, Logo, Location, VoiceSearch, YouTubeSettings, SignIn } from '../components/Header';
import { HeaderSearchInput, HeaderSearchButton } from '../components/Header/HeaderSearch/headerSearchIndex';

function Header({ toggleSidebar }) {
    return (
        <header className={styles.header}>
            <div>
                <SidebarButton toggleSidebar={toggleSidebar} />
                <Logo />
                <Location />
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
                    <VoiceSearch />
                </div>
            </div>
            <div>
                <YouTubeSettings />
                <SignIn />
            </div>
        </header>
    );
}

export default Header;
