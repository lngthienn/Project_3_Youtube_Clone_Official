import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import Layout from './layout/Layout';
import './locales/i18n';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    useEffect(() => {
        if (sessionStorage.getItem('previousURLBeforeOffline')) {
            sessionStorage.removeItem('previousURLBeforeOffline');
        }
    }, []);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/results" element={<ResultsPage />} />
                    <Route path="/results/video/:videoId" element={<VideoPlayerPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
