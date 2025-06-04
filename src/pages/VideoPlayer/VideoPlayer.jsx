import styles from '../../style/pages//VideoPlayer/VideoPlayer.module.scss';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
    const { videoId } = useParams();

    return (
        <div>
            <h2>Đang phát video</h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
