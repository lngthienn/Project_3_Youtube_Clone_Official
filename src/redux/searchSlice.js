import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_PARAMS = {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 2,
};

const buildApiUrl = (query) => {
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    const queryParams = new URLSearchParams({ ...API_PARAMS, q: query });
    return `${BASE_URL}?${queryParams.toString()}`;
};

export const fetchVideos = createAsyncThunk('search/fetchVideos', async (query, { getState }) => {
    if (!query.trim()) return [];

    const { search } = getState();
    if (search.query === query && search.videos.length > 0) {
        return search.videos;
    }

    const response = await axios.get(buildApiUrl(query));
    return response.data.items;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: { query: '', videos: [], status: 'idle' },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        clearVideos: (state) => {
            state.videos = [];
            state.status = 'idle';
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setQuery, clearVideos } = searchSlice.actions;
export default searchSlice.reducer;
