"use client"

import {motion} from "framer-motion";

import {useRef} from "react";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const HistoryInfoBullet = ({data}) => {

    const container = useRef(null)
    const isMobile = useMediaQuery('(max-width: 1000px)');


    return (
        <>
            <div
                ref={container}
                className="aspect-[440/440] w-full h-auto col-span-4 relative flex flex-col items-center justify-between text-white mt-52 mobile:col-span-12 mobile:mt-20">

                <motion.svg
                    className="mobile:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="w-full"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                >
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></motion.path>
                </motion.svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="503"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                    className="hidden mobile:block w-full"
                >
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></path>
                </svg>

                <div
                    className="textBlock flex flex-col justify-center items-center absolute h-full w-full">
                    <h2 className="text-90">{data?.bulletBlock?.number1}</h2>
                    <p>{data?.bulletBlock?.text1}</p>
                </div>
            </div>

            <div
                className="aspect-[440/440] w-full h-auto col-span-4 relative flex flex-col items-center justify-between text-white mt-52 mobile:col-span-12 mobile:mt-0">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="w-full"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                    className="mobile:hidden"
                >
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></motion.path>
                </motion.svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="503"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                    className="hidden mobile:block w-full"
                >
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></path>
                </svg>

                <div className="absolute w-full h-full textBlock flex flex-col justify-center items-center">
                    <h2 className="text-90">{data?.bulletBlock?.number2}</h2>
                    <p>{data?.bulletBlock?.text2}</p>
                </div>
            </div>
            <div
                className="aspect-[440/440] w-full h-auto col-span-4 relative flex flex-col items-center justify-between text-white mt-52 mobile:col-span-12 mobile:mt-0">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="w-full"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                    className="mobile:hidden"
                >
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></motion.path>
                    <motion.path
                        initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                        transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></motion.path>
                </motion.svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="503"
                    height="502"
                    fill="none"
                    viewBox="0 0 503 502"
                    className="hidden mobile:block w-full"
                >
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l-95.67 19.03-81.1 54.19-54.2 81.11-19.03 95.67 19.03 95.67 54.2 81.11 81.1 54.19 95.67 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l-98.18 40.67-40.66 98.18 40.66 98.18 98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h-73.22L74.64 177.76V324.2l103.55 103.56h73.22M251.41.98l95.68 19.03 81.1 54.19 54.19 81.11 19.03 95.67-19.03 95.67-54.19 81.11-81.1 54.19-95.68 19.03"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l98.18 40.67 40.67 98.18-40.67 98.18-98.18 40.67"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 74.2h73.23l103.55 103.56V324.2L324.64 427.76h-73.23"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98L178.19 74.2H74.64v103.56L1.41 250.98l73.23 73.22v103.56h103.55l73.22 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41.98l73.23 73.22h103.55v103.56l73.22 73.22-73.22 73.22v103.56H324.64l-73.23 73.22"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13L178.19 74.2l-24.96 78.6-78.59 24.96 37.93 73.22-37.93 73.22 78.59 24.96 24.96 78.6 73.22-37.93"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M251.41 112.13l73.23-37.93 24.95 78.6 78.6 24.96-37.93 73.22 37.93 73.22-78.6 24.96-24.95 78.6-73.23-37.93M155.74 20.01l22.45 54.19L74.64 177.76l-54.2-22.45-19.03 95.67 73.23 73.22-54.2 22.45 54.2 81.11h103.55l-22.45 54.19"
                    ></path>
                    <path
                        stroke="#F4F7F9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M347.09 20.01L324.64 74.2l103.55 103.56 54.19-22.45 19.03 95.67-73.22 73.22 54.19 22.45-54.19 81.11H324.64l22.45 54.19"
                    ></path>
                </svg>

                <div className="absolute w-full h-full textBlock flex flex-col justify-center items-center">
                    <h2 className="text-90">{data?.bulletBlock?.number3}</h2>
                    <p>{data?.bulletBlock?.text3}</p>
                </div>
            </div>

        </>
    )
}

export default HistoryInfoBullet