import { useSelector } from "react-redux"
import HomeItems from "../GeneralItem/HomeItems"
import './Colections.scss'

const Colections = () => {

    const homeColections = useSelector(state => state.slice.list)

    return (
        <div className="Colections">
            <HomeItems color='#fff' logo='Featured Colections' />
            <div className="grid">
                <div className="ColectionsList">
                    <div className="row">
                        {homeColections.map(homeColection => (
                            <div key={homeColection.id} className="col p-4">
                                <img className="ColectionsImg" src={homeColection.imgColections} />
                                <h2 className="ColectionsName" >{homeColection.nameColections}</h2>
                                <h3 className="ColectionsPrice" >{`${homeColection.priceColections} $`}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colections