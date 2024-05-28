"use client"

import 'swiper/css';
// import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import Cta from "@/components/Cta";
import {useEffect} from "react";

const sliderHeroProduits = ({value}) => {

    const updatePagination = (swiper) => {
        const bullets = swiper.pagination.bullets;
        bullets.forEach((bullet, index) => {
            bullet.innerHTML = swiper.realIndex === index ?
                `<svg width="22" height="16" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14L0 4L5 0H10H15L20 4L10 14Z" fill="white"/></svg>` :
                `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 15L1 5L6 1H11H16L21 5L11 15Z" stroke="white"/></svg>`;
        });
    };

    return (
        <div className="col-span-12 mt-40">
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination',
                    bulletClass: 'swiper-pagination-bullet'
                }}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    updatePagination(swiper); // Initial update
                    swiper.on('slideChange', () => updatePagination(swiper)); // Update on slide change
                }}
            >
                {value?.map(el => (
                    <SwiperSlide
                        className="relative aspect-[1400/600]"
                        key={el._key}>
                        <div
                            className="text-white z-10 absolute top-20 bottom-24 left-0 right-0 flex flex-col justify-between items-center">
                            <h2 className="uppercase">{el?.title}</h2>

                            <div className="flex flex-col justify-center items-center gap-y-5">
                                <p className="w-9/12 text-center">{el?.text}</p>
                                <div className="cta">
                                    <Cta link={el?.navItems?.[0].navItemUrl.linkUrl} linkText={el?.navItems?.[0].text}
                                         isExternalLink={false}/>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={urlForImage(el.image.asset._ref)}
                            fill={true}
                            alt="hero"
                            className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                ))}
                <div
                    className="custom-swiper-pagination swiper-pagination z-10 absolute bottom-10 left-0 right-0 flex justify-center items-center gap-2.5"></div>
            </Swiper>
        </div>
    )
}

export default sliderHeroProduits;
