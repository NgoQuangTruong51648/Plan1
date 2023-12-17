import { FaFilter } from "react-icons/fa";
import './Filters.scss'

const Filters = () => {
    return (
        <div className="Filters">
            <div className="FiltersHeader">
                <FaFilter/>
                <h2>BỘ LỌC TÌM KIẾM</h2>
            </div>
            <div className="FiltersType">
                <input type='checkbox' />
                <label>Theo Hãng</label>
            </div>
            <div className="FiltersPlace">
                <input type='checkbox' />
                <label>Theo nơi sản xuất</label>
            </div>
            <div className="FiltersPlace">
                <input type='checkbox' />
                <label>Giá cao nhất</label>
            </div>
            <div className="FiltersPlace">
                <input type='checkbox' />
                <label>Giá thấp nhất</label>
            </div>
            <div className="FiltersPlace">
                <input type='checkbox' />
                <label>Đang khuyến mãi</label>
            </div>
        </div>
    )
}

export default Filters