import { useState } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <section className="layout">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <main
                    className={`content${
                        isSidebarOpen ? 'sidebaropen' : 'sidebarclosed'
                    }`}
                >
                    {children}
                </main>
            </section>
        </>
    );
}

export default Layout;
