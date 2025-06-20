import styles from '../../styles/pages/VideoPlayerPage/VideoPlayerPage.module.scss';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SuggestedVideos from './SuggestedVideos/SuggestedVideos';

const VideoPlayerPage = () => {
    return (
        <section className={styles.videoPlayerPage}>
            <VideoPlayer />
            <SuggestedVideos />
        </section>
    );
};

export default VideoPlayerPage;
