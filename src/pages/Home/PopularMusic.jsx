import { useEffect, useState } from 'react';
import styles from '../../style/pages//Home/PopularMusic.module.scss';
import axios from 'axios';
import { BsThreeDotsVertical } from 'react-icons/bs';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

function PopularMusic() {
    const [music, setMusic] = useState([]);

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
        <section className={styles.popularmusic}>
            {music.map((track) => (
                <div key={track.id}>
                    <a>
                        <img src={track.snippet.thumbnails.maxres.url} alt={track.snippet.title} />
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

export default PopularMusic;
