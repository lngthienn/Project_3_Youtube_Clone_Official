import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('❌ API Error:', error.message);
        return Promise.reject(error);
    },
);

export default apiClient;
