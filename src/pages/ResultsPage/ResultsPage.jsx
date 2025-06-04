import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../redux/searchSlice';

const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const navigate = useNavigate();
    const { videos, status } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos(query)); // Luôn cập nhật dữ liệu mới
    }, [query]);

    if (status === 'loading') return <p>🔄 Đang tải...</p>;
    if (status === 'failed') return <p>❌ Có lỗi xảy ra! Vui lòng thử lại.</p>;
    if (status === 'succeeded' && videos.length === 0) return <p>😕 Không tìm thấy kết quả nào!</p>;

    return (
        <div>
            <h2>Kết quả tìm kiếm cho: "{query}"</h2>
            <ul>
                {videos.map((video) => (
                    <li
                        key={video?.id?.videoId}
                        onClick={() => navigate(`/results/video/${video.id.videoId}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} width={200} />
                        <p>{video.snippet.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsPage;
