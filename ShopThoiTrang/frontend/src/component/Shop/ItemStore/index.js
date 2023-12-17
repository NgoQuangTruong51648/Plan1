import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import axios from "axios";
import { FaAngleLeft, FaAngleRight,FaShoppingCart} from "react-icons/fa";
import Search from "../Search/Search";
import './ItemStore.scss'
import FooterHome from "../../Footer";
import { useState } from "react";
import ItemImgStore from "./ItemImgStore";
import { addCart } from "../../../app/listCart";

const ItemStore = () => {

    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    const params = useParams()
    const productsItem = products[params.id - 1]
    const [amount, setAmount] = useState(1)

    const handleSubmitCart = async (e) => {
        e.preventDefault()
        const newCart = {
            amount : amount,
            img : productsItem.img,
            name : productsItem.Name,
            price : productsItem.Price
        }
       
        try {
            const resp = await axios.post('http://localhost:3000/ListCart', newCart);
            dispatch(addCart(resp.data))
            alert('sản phẩm đã được thêm vào giỏ hàng')
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }

    }

    const handleAddCart = (e) => {
        e.preventDefault()
        setAmount(amount + 1)
    }

    const handleMinusCart = (e) => {
        e.preventDefault()
        if(amount > 0) {
            setAmount(amount - 1)
        }else{
            return
        }
    }

    return (
        <>
        <Search margin="p-o-2" />
        <form className="grid">
            <div className="ItemStore">
                <div className="row">
                    <div className="col p-5 ItemStoreLeft">
                        <ItemImgStore productsItem={productsItem}/>
                    </div>
                    <div className="col p-7 ItemStoreRight">
                        <div className="ItemStoreRightHeader">
                            <span className="ItemStoreRightName">{productsItem.Name}</span>
                            <span className="ItemStoreRightPrice">{`₫${productsItem.Price}`}</span>
                            <span className="ItemStoreRightColor">Màu : 
                            </span>
                        </div>
                        <div className="ItemStoreRightTotal" >
                            <span>Số Lượng</span>
                            <div className="addTotal">
                                <button onClick={(e) => handleMinusCart(e)}>
                                    <FaAngleLeft/>
                                </button>
                                <input onChange={(e) => console.log(e.target.value)} type='text' value={amount} />
                                <button onClick={(e)=> handleAddCart(e)}>
                                    <FaAngleRight/>
                                </button>
                            </div>
                        </div>
                        <div className="ItemStoreRightAddProduct">
                            <button onClick={(e) => handleSubmitCart(e)} className="addCartBtn">
                                <FaShoppingCart/>
                                <span>Thêm Vào Giỏ Hàng</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <FooterHome/>
        </>
    )
}

export default ItemStore