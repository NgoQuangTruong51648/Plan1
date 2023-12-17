import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DirectionalList from './DirectionalList'
import './ListStore.scss'

const RenderList = () => {
    
    const products = useSelector((state)=> state.products)

    const end = products.itemPerPage * products.currentPage
    const start = end - products.itemPerPage
    const Products = products.products
    const currentProducts = Products.filter((val) => {
        if(products.EnterSearch === ""){
            return val
        }else if(val.Name.toLowerCase().includes(products.EnterSearch.toLowerCase())){
            return val
        }
    }).slice(start, end)

    return (
        <div className="grid">
            <div className="RenderList">
                <ul style={{padding: 0}} className="row">
                    {currentProducts.map(currentProduct => (
                        <li key={currentProduct.id} className='col p-3' >
                            <div className='RenderItem'>
                                <NavLink style={{textDecoration : 'none'}} to={`/shop/${currentProduct.id}`}>
                                    <img className='RenderImg' src={currentProduct.img} />
                                    <div className="RenderInformation">
                                        <span className='RenderText'>{currentProduct.Name}</span>
                                        <div className="RenderDetail" >
                                            <span className='RenderText' style={{fontFamily : "cursive", color : "#0096da", margin : "6px 0"}} >{`${currentProduct.Price} $`}</span>
                                            <span className='RenderText' style={{fontFamily : "cursive"}}>{`Origin : ${currentProduct.Origin} `}</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </li>
                    ))}
                </ul>
                <DirectionalList/>
            </div>
        </div>
    )
}

export default RenderList