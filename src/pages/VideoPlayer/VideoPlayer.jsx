import styles from '../../style/pages/VideoPlayer/VideoPlayer.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import he from 'he';

const VideoPlayer = () => {
    const { videoId } = useParams();
    const videos = useSelector((state) => state.search.videos);
    const videoData = videos.find((video) => video.id.videoId === videoId);

    return (
        <section className={styles.videoplayer}>
            <iframe
                width="850"
                height="480"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay"
                allowFullScreen
            ></iframe>
            <h1>{videoData ? he.decode(videoData.snippet.title) : 'Loading...'}</h1>
        </section>
    );
};

export default VideoPlayer;
