import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const ProductAsyncThunk = createAsyncThunk('listProduct/productAsyncThunk', async(_,thunkAPI)=> {
    try {
        const response = await axios.get('http://localhost:3000/ListStore')
        return await response.data
    }
    catch(error) {
        return thunkAPI.rejectWithValue({error : 'error'})
    }
})

const listProduct = createSlice({
    name: 'listProducts',
    initialState: {
        EnterSearch: '',
        itemPerPage : 12,
        currentPage : 1,
        products: [],
        loading : false,
        error : ''
    },
    reducers: {
        update: (state, action) => {
            state.currentPage = action.payload
        },
        prevBtn: (state) => {
            state.currentPage = state.currentPage - 1
        },
        nextBtn: (state) => {
            state.currentPage = state.currentPage + 1
        },
        search: (state, action) => {
            state.EnterSearch = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ProductAsyncThunk.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(ProductAsyncThunk.fulfilled, (state,action)=> {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(ProductAsyncThunk.rejected, (state)=> {
            state.error = 'error Message'
        })
    }
})

export default listProduct.reducer
export const {update, prevBtn, nextBtn, search} = listProduct.actions