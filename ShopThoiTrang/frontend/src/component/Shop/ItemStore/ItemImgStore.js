import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./ItemStore.scss";

// import required modules
import { EffectCube, Pagination } from "swiper";


const ItemImgStore = ({productsItem}) => {
    return (
        <>
        <Swiper
            className="ItemStoreLeftImgs"
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
        >
          {productsItem.extraImg.map((item,number)=> (
            <SwiperSlide key={number} className="ItemStoreLeftImg">
                <img src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
}

export default ItemImgStore