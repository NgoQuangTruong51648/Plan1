import { FaCcPaypal, FaShieldAlt, FaShippingFast } from 'react-icons/fa'
import HomeItems from '../GeneralItem/HomeItems'
import './HighLight.scss'

const HighLight = () => {
    return (
        <div className="HighLight">
            <HomeItems logo='why we best in market' text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`} />
            <div className='grid'>
                <div className='HighLightList'>
                    <div className='row' >
                        <div className='col p-4'>
                            <div className='HighLightItem'>
                                <FaCcPaypal className='HighLightIcon'/>
                                <h2>Easy Payment All Time</h2>
                                <span>East cash and card payment facillity Enjoy 0% interest for installment.</span>
                            </div>
                        </div>
                        <div className='col p-4'>
                            <div className='HighLightItem'>
                                <FaShieldAlt className='HighLightIcon'/>
                                <h2>Super security</h2>
                                <span>All purchase information of our customers is 100% confidential.</span>
                            </div>
                        </div>
                        <div className='col p-4'>
                            <div className='HighLightItem'>
                                <FaShippingFast className='HighLightIcon'/>
                                <h2>Super fast delivery</h2>
                                <span>East cash and card payment facillity Enjoy 0% interest for installment.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighLight