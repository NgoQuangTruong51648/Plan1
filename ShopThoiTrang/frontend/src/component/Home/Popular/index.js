import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import HomeItems from "../GeneralItem/HomeItems"
import './Popular.scss'
import { useSelector } from "react-redux";

const Popular = () => {

    const PopularItem = useSelector((state) => state.popular.list)

    return (
        <div className="Popular Colections">
            <HomeItems color="#fff" logo='Popular Colections' />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
            modules={[Pagination]} className="PopularList">
                {PopularItem.map(item => (
                    <SwiperSlide key={item.id} className="PopularItem" >
                        <img src={item.imgItem} />
                        <div className="popularInformation">
                            <span>{item.popularName}</span>
                            <div className="popularDetail" >
                                <span style={{fontFamily : "cursive", color : "#0096da", margin : "16px 0"}} >{`${item.popularPrice} $`}</span>
                                <span style={{fontFamily : "cursive"}}>{`Origin : ${item.popularOrigin} `}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Popular