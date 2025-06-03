import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Layout from './layout/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/results"
                    element={
                        <Layout>
                            <ResultsPage />
                        </Layout>
                    }
                />
                <Route
                    path="/results/video"
                    element={
                        <Layout>
                            <VideoPlayer />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
