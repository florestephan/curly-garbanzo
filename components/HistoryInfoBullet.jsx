"use client"

import {motion} from "framer-motion";

import {useRef} from "react";
import useDimension from "@/components/useDimension";

const HistoryInfoBullet = ({data}) => {

    const container = useRef(null)

    return (
        <>
            <div
                ref={container}
                className="col-span-4 relative flex flex-col items-center justify-between text-white mt-52">
                <motion.svg
                    className="w-ful h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="444"
                    height="444"
                    fill="none"
                    viewBox="0 0 444 444"
                >
                    <g stroke="#fff" strokeMiterlimit="10" strokeWidth="2" opacity="0.1">
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M442 216.367l-65.056-65.2 39.965-26.959.086-.197 3.622 4.592L442 216.367z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M350.56 218.914l26.384-67.758 65.056 65.2-57.684 63.889-33.756-61.331zM156.081 73.432l68.419 32.6-88.983 31.354 20.564-63.954zM98.441 227.638l37.076 90.323-63.46-25.122 26.384-65.201zM283.003 68.448l23.065 63.954-81.568-26.369 58.503-37.585zM283.004 68.448L219.543 2.001l84.025 18.76-20.564 47.687zM384.316 280.248l-67.513 23.877 33.757-85.207 33.756 61.33z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M2 232.636l61.822-61.396 34.62 56.41-26.385 65.201L2 232.636zM388.455 371.824l-70.186 46.834-31.989-45.588 102.175-1.246zM306.068 132.398l-23.065-63.954 86.482-5.05 7.458 87.764-70.875-18.76zM233.554 442l-83.206-13.775 23.022-46.375L233.554 442zM316.803 304.123l67.513-23.876 4.139 91.569-102.175 1.246 30.523-68.939z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M369.485 63.397l-86.482 5.051 20.564-47.687 65.918 42.636zM156.081 73.432l-95.579 3.805L126.42 25.81l29.661 47.621zM350.56 218.917l-44.492-86.519 70.876 18.76-26.384 67.759zM150.347 428.228l-75.834-46.375h98.856l-23.022 46.375zM384.316 280.251l46.992 20.137-42.853 71.432-4.139-91.569zM72.057 292.84l63.46 25.123 37.853 63.888H74.514l-2.457-89.011zM233.554 442l-60.184-60.15 55.226-36.339 57.683 27.55L233.554 442zM25.884 314.169L2 232.636l70.057 60.215-46.173 21.318z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M350.559 218.922l-33.756 85.206-88.207 41.39-93.078-27.549-37.077-90.323 37.077-90.257 88.982-31.354 81.568 26.369 44.491 86.518zM63.822 171.233l-3.32-93.996 95.579-3.804-20.564 63.954-71.695 33.846z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M219.542 2.004l63.461 66.447-58.503 37.585-68.418-32.6 63.46-71.432zM156.082 73.432L126.421 25.81 219.542 2l-63.46 71.432zM15.192 148.665l48.63 22.564L2 232.625l13.192-83.96z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M63.822 171.233l-48.63-22.564 45.31-71.432 3.32 93.996zM135.517 137.384l-37.076 90.257-34.619-56.41 71.695-33.847zM376.944 151.158l-7.458-87.765 47.509 60.609-.086.197-39.965 26.959zM316.803 304.123l-30.523 68.939-57.684-27.549 88.207-41.39zM25.884 314.158l46.172-21.318 2.458 89.011-48.63-67.693zM173.369 381.851l-37.852-63.888 93.079 27.549-55.227 36.339zM431.308 300.384l-46.992-20.138L442 216.358l-10.692 84.026z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.4, ease: "easeInOut"}}
                            d="M286.28 373.061l31.989 45.588-3.147 2.033L233.554 442l52.726-68.939z"></motion.path>
                    </g>
                </motion.svg>

                <div
                    className="textBlock flex flex-col justify-center items-center absolute h-full w-full">
                    <h2 className="text-90">{data?.bulletBlock?.number1}</h2>
                    <p>{data?.bulletBlock?.text1}</p>
                </div>
            </div>

            <div className="col-span-4 relative flex flex-col items-center justify-between text-white mt-52">
                <motion.svg
                    className="w-ful h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="444"
                    height="444"
                    fill="none"
                    viewBox="0 0 444 444"
                >
                    <g stroke="#fff" strokeMiterlimit="10" strokeWidth="2" opacity="0.1">
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M442 216.367l-65.056-65.2 39.965-26.959.086-.197 3.622 4.592L442 216.367z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M350.56 218.914l26.384-67.758 65.056 65.2-57.684 63.889-33.756-61.331zM156.081 73.432l68.419 32.6-88.983 31.354 20.564-63.954zM98.441 227.638l37.076 90.323-63.46-25.122 26.384-65.201zM283.003 68.448l23.065 63.954-81.568-26.369 58.503-37.585zM283.004 68.448L219.543 2.001l84.025 18.76-20.564 47.687zM384.316 280.248l-67.513 23.877 33.757-85.207 33.756 61.33z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M2 232.636l61.822-61.396 34.62 56.41-26.385 65.201L2 232.636zM388.455 371.824l-70.186 46.834-31.989-45.588 102.175-1.246zM306.068 132.398l-23.065-63.954 86.482-5.05 7.458 87.764-70.875-18.76zM233.554 442l-83.206-13.775 23.022-46.375L233.554 442zM316.803 304.123l67.513-23.876 4.139 91.569-102.175 1.246 30.523-68.939z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M369.485 63.397l-86.482 5.051 20.564-47.687 65.918 42.636zM156.081 73.432l-95.579 3.805L126.42 25.81l29.661 47.621zM350.56 218.917l-44.492-86.519 70.876 18.76-26.384 67.759zM150.347 428.228l-75.834-46.375h98.856l-23.022 46.375zM384.316 280.251l46.992 20.137-42.853 71.432-4.139-91.569zM72.057 292.84l63.46 25.123 37.853 63.888H74.514l-2.457-89.011zM233.554 442l-60.184-60.15 55.226-36.339 57.683 27.55L233.554 442zM25.884 314.169L2 232.636l70.057 60.215-46.173 21.318z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M350.559 218.922l-33.756 85.206-88.207 41.39-93.078-27.549-37.077-90.323 37.077-90.257 88.982-31.354 81.568 26.369 44.491 86.518zM63.822 171.233l-3.32-93.996 95.579-3.804-20.564 63.954-71.695 33.846z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M219.542 2.004l63.461 66.447-58.503 37.585-68.418-32.6 63.46-71.432zM156.082 73.432L126.421 25.81 219.542 2l-63.46 71.432zM15.192 148.665l48.63 22.564L2 232.625l13.192-83.96z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M63.822 171.233l-48.63-22.564 45.31-71.432 3.32 93.996zM135.517 137.384l-37.076 90.257-34.619-56.41 71.695-33.847zM376.944 151.158l-7.458-87.765 47.509 60.609-.086.197-39.965 26.959zM316.803 304.123l-30.523 68.939-57.684-27.549 88.207-41.39zM25.884 314.158l46.172-21.318 2.458 89.011-48.63-67.693zM173.369 381.851l-37.852-63.888 93.079 27.549-55.227 36.339zM431.308 300.384l-46.992-20.138L442 216.358l-10.692 84.026z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 0.7, ease: "easeInOut"}}
                            d="M286.28 373.061l31.989 45.588-3.147 2.033L233.554 442l52.726-68.939z"></motion.path>
                    </g>
                </motion.svg>

                <div className="absolute w-full h-full textBlock flex flex-col justify-center items-center">
                    <h2 className="text-90">{data?.bulletBlock?.number2}</h2>
                    <p>{data?.bulletBlock?.text2}</p>
                </div>
            </div>
            <div className="col-span-4 relative flex flex-col items-center justify-between text-white mt-52">
                <motion.svg
                    className="w-ful h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="444"
                    height="444"
                    fill="none"
                    viewBox="0 0 444 444"
                >
                    <g stroke="#fff" strokeMiterlimit="10" strokeWidth="2" opacity="0.1">
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M442 216.367l-65.056-65.2 39.965-26.959.086-.197 3.622 4.592L442 216.367z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M350.56 218.914l26.384-67.758 65.056 65.2-57.684 63.889-33.756-61.331zM156.081 73.432l68.419 32.6-88.983 31.354 20.564-63.954zM98.441 227.638l37.076 90.323-63.46-25.122 26.384-65.201zM283.003 68.448l23.065 63.954-81.568-26.369 58.503-37.585zM283.004 68.448L219.543 2.001l84.025 18.76-20.564 47.687zM384.316 280.248l-67.513 23.877 33.757-85.207 33.756 61.33z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M2 232.636l61.822-61.396 34.62 56.41-26.385 65.201L2 232.636zM388.455 371.824l-70.186 46.834-31.989-45.588 102.175-1.246zM306.068 132.398l-23.065-63.954 86.482-5.05 7.458 87.764-70.875-18.76zM233.554 442l-83.206-13.775 23.022-46.375L233.554 442zM316.803 304.123l67.513-23.876 4.139 91.569-102.175 1.246 30.523-68.939z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M369.485 63.397l-86.482 5.051 20.564-47.687 65.918 42.636zM156.081 73.432l-95.579 3.805L126.42 25.81l29.661 47.621zM350.56 218.917l-44.492-86.519 70.876 18.76-26.384 67.759zM150.347 428.228l-75.834-46.375h98.856l-23.022 46.375zM384.316 280.251l46.992 20.137-42.853 71.432-4.139-91.569zM72.057 292.84l63.46 25.123 37.853 63.888H74.514l-2.457-89.011zM233.554 442l-60.184-60.15 55.226-36.339 57.683 27.55L233.554 442zM25.884 314.169L2 232.636l70.057 60.215-46.173 21.318z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M350.559 218.922l-33.756 85.206-88.207 41.39-93.078-27.549-37.077-90.323 37.077-90.257 88.982-31.354 81.568 26.369 44.491 86.518zM63.822 171.233l-3.32-93.996 95.579-3.804-20.564 63.954-71.695 33.846z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M219.542 2.004l63.461 66.447-58.503 37.585-68.418-32.6 63.46-71.432zM156.082 73.432L126.421 25.81 219.542 2l-63.46 71.432zM15.192 148.665l48.63 22.564L2 232.625l13.192-83.96z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M63.822 171.233l-48.63-22.564 45.31-71.432 3.32 93.996zM135.517 137.384l-37.076 90.257-34.619-56.41 71.695-33.847zM376.944 151.158l-7.458-87.765 47.509 60.609-.086.197-39.965 26.959zM316.803 304.123l-30.523 68.939-57.684-27.549 88.207-41.39zM25.884 314.158l46.172-21.318 2.458 89.011-48.63-67.693zM173.369 381.851l-37.852-63.888 93.079 27.549-55.227 36.339zM431.308 300.384l-46.992-20.138L442 216.358l-10.692 84.026z"></motion.path>
                        <motion.path
                            initial={{pathLength: 0}} whileInView={{pathLength: 1}}
                            transition={{duration: 4, delay: 1, ease: "easeInOut"}}
                            d="M286.28 373.061l31.989 45.588-3.147 2.033L233.554 442l52.726-68.939z"></motion.path>
                    </g>
                </motion.svg>

                <div className="absolute w-full h-full textBlock flex flex-col justify-center items-center">
                    <h2 className="text-90">{data?.bulletBlock?.number3}</h2>
                    <p>{data?.bulletBlock?.text3}</p>
                </div>
            </div>

        </>
    )
}

export default HistoryInfoBullet