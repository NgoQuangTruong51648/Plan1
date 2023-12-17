import Filters from "./Filters"
import ListStore from "./ListStore"
import FooterHome from '../Footer'
import './Shop.scss'

const Shop = () => {
    return (
        <div className="Shop">
            <div className="grid">
                <div className="row">
                    <div className="col p-3" >
                        <Filters/>
                    </div>

                    <div className="col p-9" >
                        <ListStore/>
                    </div>
                </div>

                <FooterHome/>
            </div>
        </div>
    )
}

export default Shop