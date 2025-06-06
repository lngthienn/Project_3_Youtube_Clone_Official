import { createSlice } from '@reduxjs/toolkit';
import fetchVideos from '../thunks/fetchVideos';

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
