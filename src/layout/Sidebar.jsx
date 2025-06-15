import styles from '../styles/layout/Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
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
} from '../components/Sidebar/SidebarImports';

function Sidebar({ isSidebarOpen }) {
    const { t } = useTranslation();

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
                <p>{t('sidebar.sidebarSignIn')}</p>
                <SidebarSignIn />
            </div>
            <div>
                <h3>{t('sidebar.sidebarExplore')}</h3>
                <SidebarTrending />
                <SidebarMusic />
                <SidebarGaming />
                <SidebarNews />
                <SidebarSports />
            </div>
            <div>
                <h3>{t('sidebar.sidebarMoreFromYouTube')}</h3>
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
                    <a href="">{t('sidebar.sidebarAbout')}</a>
                    <a href="">{t('sidebar.sidebarPress')}</a>
                    <a href="">{t('sidebar.sidebarCopyright')}</a>
                    <a href="">{t('sidebar.sidebarContactUs')}</a>
                    <a href="">{t('sidebar.sidebarCreators')}</a>
                    <a href="">{t('sidebar.sidebarAdvertise')}</a>
                    <a href="">{t('sidebar.sidebarDevelopers')}</a>
                </div>
                <div>
                    <a href="#">{t('sidebar.sidebarTerms')}</a>
                    <a href="#">{t('sidebar.sidebarPrivacy')}</a>
                    <a href="#">{t('sidebar.sidebarPolicyAndSafety')}</a>
                    <a href="#">{t('sidebar.sidebarHowYouTubeWorks')}</a>
                    <a href="#">{t('sidebar.sidebarTestNewFeatures')}</a>
                </div>
                <div>
                    <div>© 2025 Google LLC</div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
