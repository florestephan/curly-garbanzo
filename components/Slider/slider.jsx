"use client"
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const Slider = ({value}) => {

    const isMobile = useMediaQuery('(max-width: 900px)');


    return (
        <div className="pt-20">
            <Swiper
                spaceBetween={isMobile ? 5 : 10}
                slidesPerView={isMobile ? 2.2 : 8.4}
            >
                {value.map(el => (
                    <SwiperSlide
                        key={el._key}>
                        <Image
                            src={urlForImage(el.asset._ref)}
                            width={120}
                            height={120}
                            alt="partenaires"
                            className=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider