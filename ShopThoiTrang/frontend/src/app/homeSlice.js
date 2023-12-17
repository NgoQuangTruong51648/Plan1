import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const homeSliceAsyncThunk = createAsyncThunk('homeSlice/homeScliceAsyncThunk', async (_,thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/HomeMain')
        return await response.data
    }
    catch(error) {
        return thunkAPI.rejectWithValue({error : 'error'})
    }
}) 

const homeSlice = createSlice({
    name : 'slice',
    initialState : {
        status : false,
        list : [],
        error : ''
    }, 
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(homeSliceAsyncThunk.pending, (state)=> {
            state.status = true
        })
        builder.addCase(homeSliceAsyncThunk.fulfilled, (state,action)=> {
            state.status = false
            state.list = action.payload
        })
        builder.addCase(homeSliceAsyncThunk.rejected, (state)=> {
            state.status = false
            state.error = 'errorMessage'
        })
    }
})


export default homeSlice.reducer
export {homeSlice}