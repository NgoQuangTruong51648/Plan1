import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const homePopularAsyncThunk = createAsyncThunk('homePopular/homePopularAsyncThunk', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/HomePopular')
        return await response.data
    }
    catch(error) {
        return thunkAPI.rejectWithValue({error : 'error'})
    }
})

const homePopular = createSlice({
    name : 'homePopular',
    initialState : {
        list : [],
        loading : false,
        error : ''
    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(homePopularAsyncThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(homePopularAsyncThunk.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(homePopularAsyncThunk.rejected, (state) => {
            state.loading = false
            state.error = 'error Message'
        })
    }
})

export default homePopular.reducer