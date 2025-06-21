import he from 'he';
import { IoMdMusicalNote } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import resultsPageItems from '../../../styles/pages/ResultsPage/ResultsPageItems/ResultsPageItems.module.scss';

function ResultsPageItem3({ video }) {
    const navigate = useNavigate();

    return (
        <section className={resultsPageItems.resultsPageItems}>
            <div>
                <img
                    src={video?.snippet?.thumbnails?.high?.url}
                    onClick={() => navigate(`/results/video/${video?.id?.videoId}`)}
                    alt={video?.snippet?.title}
                />
            </div>
            <div>
                <div onClick={() => navigate(`/results/video/${video?.id?.videoId}`)}>
                    <p>{video ? he.decode(video.snippet.title) : 'Loading'}</p>
                    <span>
                        <BsThreeDotsVertical style={{ fontSize: '20px' }} />
                    </span>
                </div>
                <div>
                    <div>
                        <FaRegUserCircle />
                    </div>
                    <p>{video?.snippet?.channelTitle}</p>
                    <div>
                        <IoMdMusicalNote style={{ fontSize: '9px', color: '#fff' }} />
                    </div>
                </div>
                <div>{video?.snippet?.description}</div>
            </div>
        </section>
    );
}

export default ResultsPageItem3;
