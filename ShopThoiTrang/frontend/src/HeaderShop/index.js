import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaAlignJustify } from "react-icons/fa";
import './HeaderShop.scss'

const HeaderShop = () => {
    return (
        <header className='HeaderShop' >
            <div className='HeaderLogo' >
                <h2 className='Logo' >
                    salara
                </h2>
            </div>

            <ul className='HeaderList' >
                <li className='HeaderItem' > 
                    <NavLink to='/' activeclassname='active' >Home</NavLink>
                </li>
                <li className='HeaderItem' > 
                    <NavLink to='/shop' activeclassname='active' >Shop</NavLink>
                </li>
                <li className='HeaderItem' > 
                    <NavLink to='/ourstore' activeclassname='active' >Our Store</NavLink>
                </li>
                <li className='HeaderItem' > 
                    <NavLink to='/help' activeclassname='active' >Help</NavLink>
                </li>
            </ul>

            <div>
                <NavLink to='/shop/cart'>
                    <FaShoppingCart className='HeaderCart'/>
                </NavLink>
                <FaAlignJustify className='HeaderMenu'/>
            </div>

        </header>
    )
}

export default HeaderShop