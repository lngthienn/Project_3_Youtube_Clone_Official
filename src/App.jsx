import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Layout from './layout/Layout';
import './locales/i18n';
import { useTheme } from './context/Theme/useTheme';

function App() {
    const { i18n } = useTranslation();
    const { toggleTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            toggleTheme(savedTheme);
        }
    }, [toggleTheme]);

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/results/video/:videoId" element={<VideoPlayer />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
