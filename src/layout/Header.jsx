import styles from '../style/layout/Header.module.scss';
import { FaMicrophone, FaEllipsisV, FaUserCircle } from 'react-icons/fa';
import { ImKeyboard } from 'react-icons/im';
import { CiSearch } from 'react-icons/ci';

function Header({ toggleSidebar }) {
    return (
        <header className={styles.header}>
            <div>
                <div onClick={toggleSidebar}>☰</div>
                <a href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt=""
                        width={93}
                    />
                </a>
                <span>VN</span>
            </div>
            <div>
                <div>
                    <div>
                        <CiSearch className={styles.searchheader} />
                        <form action="">
                            <input type="text" placeholder="Tìm kiếm" />
                        </form>
                        <button>
                            <ImKeyboard
                                style={{ fontSize: '18px', background: '#fff', color: '#7b7b7b', cursor: 'pointer' }}
                            />
                        </button>
                    </div>
                    <div>
                        <button>
                            <CiSearch style={{ fontSize: '24px', cursor: 'pointer' }} />
                        </button>
                    </div>
                </div>
                <div>
                    <FaMicrophone />
                </div>
            </div>
            <div>
                <div>
                    <FaEllipsisV />
                </div>
                <button>
                    <FaUserCircle style={{ fontSize: '20' }} />
                    <p>Đăng nhập</p>
                </button>
            </div>
        </header>
    );
}

export default Header;
