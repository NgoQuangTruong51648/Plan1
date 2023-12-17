import { useSelector} from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import './Slider.scss'

const Slider = () => {
    
    const homeSlider = useSelector((state) => state.slice.list)

    return (
        <div className="slice">
            <Swiper navigation={true} 
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]} 
                    className="SliderMain">
                {homeSlider.map(slider=> (
                    <SwiperSlide className="SliderMainItem" key={slider.id} >
                        <img src={slider.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider