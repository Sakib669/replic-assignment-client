import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <article className="py-16 md:mx-20">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/561/842/non_2x/physics-banner-outline-style-vector.jpg" alt="physics banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://t4.ftcdn.net/jpg/03/78/03/15/360_F_378031538_AMikPwM9QFfhiFD1L5yZJ6o46Nnzqpir.jpg" alt="chemistry banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://t3.ftcdn.net/jpg/02/78/40/62/360_F_278406271_O3ZKHDRuNPukORoarb8ydJYPhXlN7sIL.jpg" alt="math banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://fusion-universal-assets-prod-vs.s3.amazonaws.com/file-host/4c5b97ee-4af6-4ea6-9628-1fe0fc76affb--3516452972261046798-25/15/Biology%20Banner.png" alt="biology banner" />
                </SwiperSlide>
            </Swiper>
        </article>
    );
};

export default Banner;