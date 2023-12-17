import Search from "../Search/Search";
import './ListStore.scss'
import RenderList from './RenderList';

const ListStore = () => {

    return (
        <div className="ListStore">
            <Search/>
            <RenderList/>
        </div>
    )
}

export default ListStore