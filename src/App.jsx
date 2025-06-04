import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Layout from './layout/Layout';

function App() {
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
