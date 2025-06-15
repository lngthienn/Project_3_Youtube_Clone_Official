import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { buildSearchUrl } from '../../utils/youtubeApi';

const fetchVideos = createAsyncThunk('search/fetchVideos', async (query, { getState }) => {
    if (!query.trim()) return [];

    const { search } = getState();
    if (search.query === query && search.videos.length > 0) {
        return search.videos;
    }
    const response = await axios.get(buildSearchUrl(query));
    console.log(response.data);
    return response.data.items;
});

export default fetchVideos;
