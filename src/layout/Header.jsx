import styles from '../style/layout/Header.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { ImKeyboard } from 'react-icons/im';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuery, clearVideos } from '../redux/slices/searchSlice';
import fetchVideos from '../redux/thunks/fetchVideos';

import SidebarButton from '../components/Header/SidebarButton/SidebarButton';
import Logo from '../components/Header/Logo/Logo';
import Location from '../components/Header/Location/Location';
import VoiceSearch from '../components/Header/VoiceSearch/VoiceSearch';
import YouTubeSettings from '../components/Header/YouTubeSettings/YouTubeSettings';

function Header({ toggleSidebar }) {
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

    return (
        <header className={styles.header}>
            <section>
                <SidebarButton toggleSidebar={toggleSidebar} />
                <Logo />
                <Location />
            </section>
            <section>
                <div>
                    <div>
                        <CiSearch className={styles.searchheader} />
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                value={query}
                                onChange={(e) => dispatch(setQuery(e.target.value))}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                aria-label="Nhập từ khóa tìm kiếm"
                            />
                        </form>
                        <button title="Tìm kiếm" onClick={handleSearch}>
                            <ImKeyboard
                                style={{ fontSize: '18px', background: '#fff', color: '#7b7b7b', cursor: 'pointer' }}
                            />
                        </button>
                    </div>
                    <div>
                        <button title="Tìm kiếm nhanh" onClick={handleSearch}>
                            <CiSearch style={{ fontSize: '24px', cursor: 'pointer' }} />
                        </button>
                    </div>
                </div>
                <VoiceSearch />
            </section>
            <section>
                <YouTubeSettings />
                <button title="Đăng nhập">
                    <FaUserCircle style={{ fontSize: '20px' }} />
                    <p>Đăng nhập</p>
                </button>
            </section>
        </header>
    );
}

export default Header;
