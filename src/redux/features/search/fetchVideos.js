import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../utils/api/apiClient';

const fetchVideos = createAsyncThunk('search/fetchVideos', async (query, { getState }) => {
    if (!query.trim()) return [];

    const { search } = getState();
    if (search.query === query && search.videos.length > 0) {
        return search.videos;
    }

    const response = await apiClient.get('/search', {
        params: { q: query, maxResults: 2, type: 'video' },
    });

    return response.data.items;
});

export default fetchVideos;
