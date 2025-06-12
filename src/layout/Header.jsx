import styles from '../style/layout/Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../redux/slices/searchSlice';
import fetchVideos from '../redux/thunks/fetchVideos';
import { SidebarButton, Logo, Location, VoiceSearch, YouTubeSettings, SignIn } from '../components/Header';
import { HiddenSearchInput, SearchInput, OskInput, SearchButton } from '../components/Header/Search';
import { useRef, useState } from 'react';

function Header({ toggleSidebar }) {
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useSelector((state) => state.search.query);

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(clearVideos());
            dispatch(fetchVideos(query));
            navigate(`/results?query=${query}`);
        }
    };

    const handleClickSearch = (event) => {
        if (event.target.tagName !== 'INPUT') {
            event.currentTarget.querySelector('input')?.focus();
        }
        setExpanded(true);
        inputRef.current.focus();
    };

    const handleBlur = () => {
        const timer = setTimeout(() => {
            if (document.activeElement !== inputRef.current) {
                setExpanded(false);
            }
        }, 50);

        return () => clearTimeout(timer);
    };

    return (
        <header className={styles.header}>
            <section>
                <SidebarButton toggleSidebar={toggleSidebar} />
                <Logo />
                <Location />
            </section>
            <section>
                <div>
                    <div onFocus={handleClickSearch} onBlur={handleBlur} tabIndex={0}>
                        {expanded && <HiddenSearchInput />}
                        <SearchInput handleSearch={handleSearch} query={query} dispatch={dispatch} ref={inputRef} />
                        <OskInput />
                    </div>
                    <div>
                        <SearchButton handleSearch={handleSearch} />
                    </div>
                </div>
                <div>
                    <VoiceSearch />
                </div>
            </section>
            <section>
                <YouTubeSettings />
                <SignIn />
            </section>
        </header>
    );
}

export default Header;
