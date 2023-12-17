import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

// thunkApi dùng để dispatch 1 action ở trong này
export const listCartAsynThunk = createAsyncThunk('listCart/listCartAsynThunk', async (_,thunkAPI)=> {
    try {
        const response = await axios.get('http://localhost:3000/ListCart')
        return await response.data
    }
    catch(error) {
        return thunkAPI.rejectWithValue({error : 'error'})
    }
}) 

const listCart = createSlice({
    name : "listCart",
    initialState : {
        listCart: [],
        loading : false,
        error : ''
    },
    reducers: {
        addCart: (state,action)=> {
            const newCart = action.payload
            state.listCart.push(newCart)
        },
        removeCart : (state,action) => {
           const newCart = state.listCart.filter(item => item.id !== action.payload)
           state.listCart = newCart
        },
        checks : (state,action) => {
            state.listCart[action.payload].checks = true
        }
    },
    extraReducers : (builder) => {
        builder.addCase(listCartAsynThunk.pending, (state)=> {
            state.loading = true
        })
        builder.addCase(listCartAsynThunk.fulfilled, (state,action)=> {
            state.loading = false
            state.listCart = action.payload
        })
        builder.addCase(listCartAsynThunk,(state)=> {
            state.error = 'errormessage'
            state.loading = false
        })
    }
})

export default listCart.reducer
export const {addCart, removeCart,checks} = listCart.actions