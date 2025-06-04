import styles from '../style/layout/Header.module.scss';
import { FaMicrophone, FaEllipsisV, FaUserCircle } from 'react-icons/fa';
import { ImKeyboard } from 'react-icons/im';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuery, fetchVideos, clearVideos } from '../redux/searchSlice';

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
            <div>
                <div onClick={toggleSidebar} title="Mở/Đóng Sidebar">
                    ☰
                </div>
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube Logo"
                        width={93}
                    />
                </a>
                <span>VN</span>
            </div>
            <div>
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
                <div title="Tìm kiếm bằng giọng nói">
                    <FaMicrophone />
                </div>
            </div>
            <div>
                <div>
                    <FaEllipsisV title="Tùy chọn" />
                </div>
                <button title="Đăng nhập">
                    <FaUserCircle style={{ fontSize: '20px' }} />
                    <p>Đăng nhập</p>
                </button>
            </div>
        </header>
    );
}

export default Header;
