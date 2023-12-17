import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { search } from '../../../app/listProduct'
import './Search.scss'

const Search = ({margin}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearch] = useState('')

    const handleSubmitEnter = (e) => {
        if(e.key === 'Enter') {
            dispatch(search(searchValue))
            navigate('/shop')
        }
    }

    const handleSubmitClick = () => {
        dispatch(search(searchValue))
        navigate('/shop')
    }

    return (
        <div className={`ListStoreSearch ${margin ? margin : ''}`}>
            <input onKeyDown={(e) => handleSubmitEnter(e)} onChange={(e) => setSearch(e.target.value)} type='text' placeholder="Lựa chọn phong cách của bạn"/>
            <button onClick={() => handleSubmitClick()} className="ListStoreBtnSearch" >
                <FaSearch/>
            </button>
        </div>
    )
}

export default Search