import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Layout from './layout/Layout';
import { LanguageProvider } from './context/Languages/LanguageContext.jsx';

function App() {
    return (
        <Router>
            <LanguageProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/results" element={<ResultsPage />} />
                        <Route path="/results/video/:videoId" element={<VideoPlayer />} />
                    </Routes>
                </Layout>
            </LanguageProvider>
        </Router>
    );
}

export default App;
