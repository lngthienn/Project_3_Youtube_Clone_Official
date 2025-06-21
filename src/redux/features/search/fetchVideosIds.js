import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../utils/api/common/apiClient';

const fetchVideos = createAsyncThunk('search/fetchVideos', async ({ query, pageToken = '' }, { rejectWithValue }) => {
    try {
        if (!query.trim()) return [];

        const response = await apiClient.get('/search', {
            params: {
                q: query,
                maxResults: 25,
                type: 'video',
                pageToken,
            },
        });

        return {
            items: response.data.items,
            nextPageToken: response.data.nextPageToken || '',
            query,
        };
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

export default fetchVideos;
