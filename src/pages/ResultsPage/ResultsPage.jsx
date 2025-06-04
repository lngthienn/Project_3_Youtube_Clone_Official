import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../redux/searchSlice';
import he from 'he';
import PopularTypes from '../Home/PopularTypes';
import styles from '../../style/pages/ResultsPage/ResultsPage.module.scss';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const { videos, status } = useSelector((state) => state.search);

    useEffect(() => {
        dispatch(fetchVideos(query));
    }, [dispatch, query]);

    if (status === 'loading') return <p>🔄 Đang tải...</p>;
    if (status === 'failed') return <p>❌ Có lỗi xảy ra! Vui lòng thử lại vào ngày mai...</p>;
    if (status === 'succeeded' && videos.length === 0) return <p>😕 Không tìm thấy kết quả nào!</p>;

    return (
        <section className={styles.resultspage}>
            <PopularTypes />
            <h2>
                Ý bạn là: <i>{query}</i>
            </h2>
            <ul>
                {videos.map((video) => (
                    <li
                        key={video?.id?.videoId}
                        onClick={() => navigate(`/results/video/${video.id.videoId}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />

                        <p>{videos ? he.decode(video.snippet.title) : 'Loading'}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResultsPage;
