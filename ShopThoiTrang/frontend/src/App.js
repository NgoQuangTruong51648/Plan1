
import './App.css';
import HeaderShop from './HeaderShop';
import Header from './Header'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { homeSliceAsyncThunk } from './app/homeSlice';
import { homePopularAsyncThunk } from './app/homePopular';
import { ProductAsyncThunk } from './app/listProduct';
import { listCartAsynThunk } from './app/listCart';

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(homeSliceAsyncThunk())
    dispatch(homePopularAsyncThunk())
    dispatch(ProductAsyncThunk())
    dispatch(listCartAsynThunk())
  },[dispatch]) 

  return (
    <div className="App">
      <HeaderShop/>
      <Header/>
    </div>
  );
}

export default App;
