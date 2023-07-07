// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

import { SunnyMorning } from 'moving-letters'



const Banner4 = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <section className="py-20 md:mx-40 mx-10 ">
            <span className="font-bold mb-20 text-center
            ">
                <SunnyMorning text="Our Student's Review" />
                </span>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-lg"
            >
                {
                    reviews?.map(review =>
                        <SwiperSlide
                            className="space-y-10 py-5"
                            key={review.author}>
                            <h3 className="text-3xl font-semibold ">
                                {review.author}
                            </h3>
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180, }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="font-semibold text-xl">
                                {review.content}
                            </p>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Banner4;