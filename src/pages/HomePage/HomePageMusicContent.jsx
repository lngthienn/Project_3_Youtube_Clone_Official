import { useEffect, useState } from 'react';
import styles from '../../styles/pages/HomePage/HomePageMusicContent.module.scss';
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

function HomePageMusicContent() {
    const [music, setMusic] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cachedData = localStorage.getItem('popularMusic');
        if (cachedData) {
            setMusic(JSON.parse(cachedData));
        } else {
            axios
                .get(`https://www.googleapis.com/youtube/v3/videos`, {
                    params: {
                        part: 'snippet, contentDetails, statistics',
                        chart: 'mostPopular',
                        videoCategoryId: 10,
                        regionCode: 'VN',
                        maxResults: 3,
                        key: API_KEY,
                    },
                })
                .then((response) => {
                    setMusic(response.data.items);
                    localStorage.setItem('popularMusic', JSON.stringify(response.data.items));
                })
                .catch((error) => console.error('Lỗi khi gọi API:', error));
        }
    }, []);

    return (
        <section className={styles.homePageMusicContent}>
            {music.map((track) => (
                <div key={track.id}>
                    <a>
                        <img
                            src={track.snippet.thumbnails.maxres.url}
                            alt={track.snippet.title}
                            onClick={() => navigate(`/results/video/${track.id.videoId}`)}
                        />
                    </a>
                    <div>
                        <div>
                            <span>avt</span>
                        </div>
                        <div>
                            <h3>
                                {track.snippet.title} - {track.snippet.channelTitle}
                            </h3>
                        </div>
                        <div>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default HomePageMusicContent;
