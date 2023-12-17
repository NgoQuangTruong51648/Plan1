import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Shop from '../component/Shop'
import OurStore from '../component/OurStore'
import Help from '../component/Help'
import Cart from '../component/Cart'
import ItemStore from '../component/Shop/ItemStore'

const Header = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/ourstore' element={<OurStore/>}/>
                <Route path='/help' element={<Help/>}/>
                <Route path='/shop/:id' element={<ItemStore/>}/>
                <Route path='/shop/cart' element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default Header