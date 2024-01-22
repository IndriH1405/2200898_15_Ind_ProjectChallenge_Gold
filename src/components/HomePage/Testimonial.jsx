import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Card
import TestiCard1 from "./TestiCard1";
import TestiCard2 from "./TestiCard2";
import TestiCard3 from "./TestiCard3";

const Testimonial = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide> 
                <TestiCard1/> 
            </SwiperSlide>
            <SwiperSlide>
                <TestiCard2 />
            </SwiperSlide>
            <SwiperSlide>
                <TestiCard3 />
            </SwiperSlide>
        </Swiper>
    );
};

export default Testimonial;
