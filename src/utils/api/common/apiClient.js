import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        part: 'snippet',
    },
});

export default apiClient;
