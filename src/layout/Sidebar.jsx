import styles from '../style/layout/Sidebar.module.scss';
import translations from '../locales/i18n';
import { useLanguage } from '../context/Languages/useLanguage';
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
    const { currentLanguage } = useLanguage();

    return (
        <aside className={isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}>
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
                <p>{translations[currentLanguage].sidebar.sidebarSignIn}</p>
                <SidebarSignIn />
            </div>
            <div>
                <h3>{translations[currentLanguage].sidebar.sidebarExplore}</h3>
                <SidebarTrending />
                <SidebarMusic />
                <SidebarGaming />
                <SidebarNews />
                <SidebarSports />
            </div>
            <div>
                <h3>{translations[currentLanguage].sidebar.sidebarMoreFromYouTube}</h3>
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
                    <a href="">{translations[currentLanguage].sidebar.sidebarAbout}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarPress}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarCopyright}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarContactUs}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarCreators}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarAdvertise}</a>
                    <a href="">{translations[currentLanguage].sidebar.sidebarDevelopers}</a>
                </div>
                <div>
                    <a href="#">{translations[currentLanguage].sidebar.sidebarTerms}</a>
                    <a href="#">{translations[currentLanguage].sidebar.sidebarPrivacy}</a>
                    <a href="#">{translations[currentLanguage].sidebar.sidebarPolicyAndSafety}</a>
                    <a href="#">{translations[currentLanguage].sidebar.sidebarHowYouTubeWorks}</a>
                    <a href="#">{translations[currentLanguage].sidebar.sidebarTestNewFeatures}</a>
                </div>
                <div>
                    <div>© 2025 Google LLC</div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
