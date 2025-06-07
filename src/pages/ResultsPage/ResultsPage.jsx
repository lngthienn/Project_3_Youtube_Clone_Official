import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import fetchVideos from '../../redux/thunks/fetchVideos';
import he from 'he';
import PopularTypes from '../Home/PopularTypes';
import { IoMdMusicalNote } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from '../../style/pages/ResultsPage/ResultsPage.module.scss';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videos, status } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

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
                                <span>
                                    <BsThreeDotsVertical style={{ fontSize: '20' }} />
                                </span>
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
                            <div>{video.snippet.description}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResultsPage;
