import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import styles from '../styles/layout/Layout.module.scss';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const isVideoPlayerPage = location.pathname.startsWith('/results/video');

    useEffect(() => {
        setIsSidebarVisible(!location.pathname.startsWith('/results/video/'));
    }, [location.pathname]);

    const handleOpenSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

    return (
        <>
            <Header handleOpenSidebar={handleOpenSidebar} />
            {isSidebarVisible && <Sidebar isSidebarOpen={true} handleOpenSidebar={handleOpenSidebar} />}
            {!isVideoPlayerPage ? (
                <main className={isSidebarVisible ? styles.contentSidebarOpen : styles.contentSidebarClosed}>
                    {children}
                </main>
            ) : (
                <main
                    className={
                        isSidebarVisible
                            ? styles.contentSidebarOpenVideoPlayerPage
                            : styles.contentSidebarClosedVideoPlayerPage
                    }
                >
                    {children}
                </main>
            )}
        </>
    );
}

export default Layout;
