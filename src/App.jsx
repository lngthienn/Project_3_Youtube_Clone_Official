import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import VideoPlayer from './pages/VideoPlayer';
import Layout from './layout/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            {' '}
                            <Home />{' '}
                        </Layout>
                    }
                />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/results/video" element={<VideoPlayer />} />
            </Routes>
        </Router>
    );
}

export default App;
