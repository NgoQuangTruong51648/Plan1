import { useDispatch, useSelector } from 'react-redux'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import './ListStore.scss'
import { nextBtn, prevBtn, update } from '../../../app/listProduct';
import { useState } from 'react';

const DirectionalList = () => {

    const [active, setActive] = useState(1)
    const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()

    const productIndex = []
    for(let i = 1; i <= Math.ceil((products.products.length / products.itemPerPage)); i++){
        productIndex.push(Number(i))
    }

    const handlePerPage = (e) => {
        dispatch(update(Number(e.target.textContent)))
        setActive(Number(e.target.textContent))
    }

    const handlePrev = () => {
        if(products.currentPage > 1 ){
            dispatch(prevBtn())
            setActive(Number(active) - 1)
        }
    }

    const handleNext = () => {
        if(products.currentPage < Math.ceil((products.products.length / products.itemPerPage))){
            dispatch(nextBtn())
            setActive(Number(active) + 1)
        }
    }

    return (
        <ul className='DirectionalList' >
            <li>
                <button className='ItemBtn' onClick={handlePrev} >
                    <FaAngleLeft/>
                </button>
            </li>
            {productIndex.map(index => (
                <li className='ItemHoldBtn' key={index} >
                    <button className={`ItemBtn ${Number(active) === index ? 'active' : ''}`} onClick={(e) => handlePerPage(e)} >{index}</button>
                </li>
            ))}
            <li>
                <button className='ItemBtn' onClick={handleNext} >
                    <FaAngleRight/>
                </button>
            </li>
        </ul>
    )
}

export default DirectionalList