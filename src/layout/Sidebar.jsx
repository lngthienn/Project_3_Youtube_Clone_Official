import styles from '../style/layout/Sidebar.module.scss';
import {
    SidebarHome,
    SidebarShorts,
    SidebarSubscriptions,
    SidebarYou,
    SidebarHistory,
    SidebarTrending,
    SidebarMusic,
    SidebarGaming,
    SidebarNews,
    SidebarSports,
    SidebarYouTubePremium,
    SidebarYouTubeKids,
    SidebarYouTubeMusic,
    SidebarReportHistory,
    SidebarSettings,
    SidebarSendFeedback,
    SidebarHelp,
    SidebarSignIn,
} from '../components/Sidebar/indexSidebar';

function Sidebar({ isSidebarOpen }) {
    return (
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebar : styles.closed}`}>
            <div>
                <SidebarHome isSidebarOpen={isSidebarOpen} />
                <SidebarShorts isSidebarOpen={isSidebarOpen} />
                <SidebarSubscriptions isSidebarOpen={isSidebarOpen} />
            </div>
            <div>
                <SidebarYou isSidebarOpen={isSidebarOpen} />
                <SidebarHistory isSidebarOpen={isSidebarOpen} />
            </div>
            <div>
                <p>Hãy đăng nhập để thích video, bình luận và đăng ký kênh.</p>
                <SidebarSignIn />
            </div>
            <div>
                <h3>Khám phá</h3>
                <SidebarTrending />
                <SidebarMusic />
                <SidebarGaming />
                <SidebarNews />
                <SidebarSports />
            </div>
            <div>
                <h3>Dịch vụ khác của YouTube</h3>
                <SidebarYouTubePremium />
                <SidebarYouTubeMusic />
                <SidebarYouTubeKids />
            </div>
            <div>
                <SidebarSettings />
                <SidebarReportHistory />
                <SidebarHelp />
                <SidebarSendFeedback />
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
