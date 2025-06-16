import apiClient from './apiClient';

export const fetchYouTubeSearchResults = (query) => {
    return apiClient.get('/search', {
        params: {
            q: query,
            type: 'video',
            maxResults: 2,
        },
    });
};
