import { useState } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import styles from '../style/layout/Layout.module.scss';

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <main className={`${styles.content} ${isSidebarOpen ? styles.sidebaropen : styles.sidebarclosed}`}>
                {children}
            </main>
        </>
    );
}

export default Layout;
