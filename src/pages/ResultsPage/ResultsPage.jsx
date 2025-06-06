import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import fetchVideos from '../../redux/thunks/fetchVideos';
import he from 'he';
import PopularTypes from '../Home/PopularTypes';
import { IoMdMusicalNote } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { FaRegUserCircle } from 'react-icons/fa';
import styles from '../../style/pages/ResultsPage/ResultsPage.module.scss';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const { videos, status } = useSelector((state) => state.search);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const formatYearAgo = (publishedDate) => {
        const yearsAgo = Math.round((Date.now() - new Date(publishedDate).getTime()) / (1000 * 60 * 60 * 24 * 365));
        return `${yearsAgo} năm trước`;
    };

    useEffect(() => {
        if (query) {
            dispatch(fetchVideos(query));
        }
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
                    <li key={video?.id?.videoId}>
                        <div>
                            <img
                                src={video.snippet.thumbnails.high.url}
                                onClick={() => navigate(`/results/video/${video.id.videoId}`)}
                                alt={video.snippet.title}
                            />
                        </div>
                        <div>
                            <div>
                                <p>{videos ? he.decode(video.snippet.title) : 'Loading'}</p>
                            </div>
                            <div>
                                <GoDotFill style={{ fontSize: '5' }} />
                                <p>
                                    {video.snippet.publishedAt
                                        ? formatYearAgo(video.snippet.publishedAt)
                                        : 'Đang tải...'}
                                </p>
                            </div>
                            <div>
                                <div>
                                    <FaRegUserCircle />
                                </div>
                                <p>{video.snippet.channelTitle}</p>
                                <div>
                                    <IoMdMusicalNote style={{ fontSize: '9', color: '#fff' }} />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResultsPage;
