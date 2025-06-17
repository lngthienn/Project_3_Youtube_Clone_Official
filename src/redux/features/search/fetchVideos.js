import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSuggestions } from '../../../utils/api/youtubeApi';

const fetchVideos = createAsyncThunk('search/fetchVideos', async (query, { getState }) => {
    if (!query.trim()) return [];

    const { search } = getState();
    if (search.query === query && search.videos.length > 0) {
        return search.videos;
    }

    const response = await fetchSuggestions(query);
    return response.data.items;
});

export default fetchVideos;
