import styles from '../style/layout/Sidebar.module.scss';
import { IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts, SiYoutubemusic, SiYoutubekids, SiYoutubegaming } from 'react-icons/si';
import { CgYoutube } from 'react-icons/cg';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { VscHistory } from 'react-icons/vsc';
import { HiOutlineFire } from 'react-icons/hi';
import { IoMusicalNotesOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { MdOutlineNewspaper } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';
import { GoReport } from 'react-icons/go';
import { RiFlagLine } from 'react-icons/ri';

function Sidebar({ isSidebarOpen }) {
    return (
        <aside className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.closed}`}>
            <div>
                <a href="">
                    <IoMdHome className={styles.icon} />
                    <p>Trang chủ</p>
                </a>
                <a href="">
                    <SiYoutubeshorts className={styles.icon} />
                    <p>Shorts</p>
                </a>
                <a href="">
                    <CgYoutube className={styles.icon} />
                    <p>Kênh đăng ký</p>
                </a>
            </div>
            <div>
                <a href="">
                    <FaRegCircleUser className={styles.icon} />
                    <p>Bạn</p>
                </a>
                <a href="">
                    <VscHistory className={styles.icon} />
                    <p>Video đã xem</p>
                </a>
            </div>
            <div>
                <p>Hãy đăng nhập để thích video, bình luận và đăng ký kênh.</p>
                <button>
                    <FaUserCircle style={{ fontSize: '20' }} />
                    <p>Đăng nhập</p>
                </button>
            </div>
            <div>
                <h3>Khám phá</h3>
                <a href="">
                    <HiOutlineFire className={styles.icon} />
                    <p>Thịnh hành</p>
                </a>
                <a href="">
                    <IoMusicalNotesOutline className={styles.icon} />
                    <p>Âm nhạc</p>
                </a>
                <a href="">
                    <SiYoutubegaming className={styles.icon} />
                    <p>Trò chơi</p>
                </a>
                <a href="">
                    <MdOutlineNewspaper className={styles.icon} />
                    <p>Tin tức</p>
                </a>
                <a href="">
                    <BsTrophy className={styles.icon} />
                    <p>Thể thao</p>
                </a>
            </div>
            <div>
                <h3>Dịch vụ khác của YouTube</h3>
                <a href="">
                    <FaYoutube className={styles.icon} style={{ color: 'red' }} />
                    <p>Youtube Premium</p>
                </a>
                <a href="">
                    <SiYoutubemusic className={styles.icon} style={{ color: 'red' }} />
                    <p>YouTube Music</p>
                </a>
                <a href="">
                    <SiYoutubekids className={styles.icon} style={{ color: 'red' }} />
                    <p>YouTube Kids</p>
                </a>
            </div>
            <div>
                <a href="">
                    <CiSettings className={styles.icon} />
                    <p>Cài đặt</p>
                </a>
                <a href="">
                    <RiFlagLine className={styles.icon} />
                    <p>Nhật ký báo cáo</p>
                </a>
                <a href="">
                    <IoHelpCircleOutline className={styles.icon} />
                    <p>Trợ giúp</p>
                </a>
                <a href="">
                    <GoReport className={styles.icon} />
                    <p>Gửi ý kiến phản hồi</p>
                </a>
            </div>
            <div>
                <div>
                    <a href="">Giới thiệu</a>
                    <a href="">Báo chí</a>
                    <a href="">Bản quyền</a>
                    <a href="">Liên hệ với chúng tôi</a>
                    <a href="">Người sáng tạo</a>
                    <a href="">Quảng cáo</a>
                    <a href="">Nhà phát triển</a>
                </div>
                <div>
                    <a href="#">Điều khoản</a>
                    <a href="#">Quyền riêng tư</a>
                    <a href="#">Chính sách và an toàn</a>
                    <a href="#">Cách YouTube hoạt động</a>
                    <a href="#">Thử các tính năng mới</a>
                </div>
                <div>
                    <div>© 2025 Google LLC</div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
