import { createSlice } from '@reduxjs/toolkit';
import fetchVideos from './fetchVideosIds';

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
                state.error = null;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.videos = action.payload;
                state.query = action.meta.arg;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setQuery, clearVideos } = searchSlice.actions;
export default searchSlice.reducer;
