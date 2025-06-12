import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import styles from '../style/layout/Layout.module.scss';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        if (location.pathname.startsWith('/results/video/')) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(true);
        }
    }, [location.pathname]);

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <main className={isSidebarOpen ? styles.contentSidebarOpen : styles.contentSidebarClosed}>{children}</main>
        </>
    );
}

export default Layout;
