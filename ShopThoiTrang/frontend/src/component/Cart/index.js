import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { FaOpencart } from "react-icons/fa";
import Search from "../Shop/Search/Search";
import './Cart.scss'
import FooterHome from "../Footer";
import { checks, removeCart } from "../../app/listCart";

const Cart = () => {

    const Carts = useSelector((state) => state.Carts.listCart)
    const dispatch = useDispatch()

    const handleDeleteCart = async (e,id) => {
        e.preventDefault();
        try {
            const resp = await axios.delete(`http://localhost:3000/ListCart/${id}`)
            dispatch(removeCart(id))
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    return (
        <div className="Cart">
            <div className="grid">
                <div className="row">
                    <div className="col p-6">
                        <div className="CartLeft">
                            <FaOpencart/>
                            <span>Giỏ Hàng</span>
                        </div>
                    </div>
                    <div className="col p-6">
                        <div className="CartRight">
                            <Search/>
                        </div>
                    </div>
                </div>

                <div className="CartList" >
                    {Carts.map((Cart,number) => (
                        <div key={Cart.id} className="CartItem">
                            <div className="CartListHeader">
                                <div className="row">
                                    <div className="col p-6">
                                        <input onClick={()=> dispatch(checks(number))} type='checkbox' />
                                        <label>Sản Phẩm</label>
                                    </div>
                                    <div className="col p-6 CartHeaderDetail">
                                        <span>Đơn giá</span>
                                        <span>Số Lượng</span>
                                        <span>Số Tiền</span>
                                        <span>Thao Tác</span>
                                    </div>
                                </div>
                            </div>
                            <div className="CartListFooter">
                                <div className="row">
                                    <div className="col p-6 CartImg">
                                        <img src={Cart.img}/>
                                        <span>{Cart.name}</span>
                                    </div>
                                    <div className="col p-6 CartFooterDetail">
                                        <span>{Cart.price}</span>
                                        <span>{Cart.amount}</span>
                                        <span>{Cart.price}</span>
                                        <button onClick={(e) => handleDeleteCart(e,Cart.id)} >Xóa</button>               
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}     
                </div>
                <FooterHome/>
            </div>
        </div>
    )
}

export default Cart