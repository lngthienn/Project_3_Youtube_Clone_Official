export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const COMMON_PARAMS = {
    key: YOUTUBE_API_KEY,
    part: 'snippet',
};

export const buildSearchUrl = (query) => {
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const params = new URLSearchParams({
        ...COMMON_PARAMS,
        type: 'video',
        maxResults: 2,
        q: query,
    });
    return `${BASE_URL}?${params.toString()}`;
};
