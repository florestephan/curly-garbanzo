"use client"

import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import {useRef} from "react";
import TitleTxtCta from "@/components/TitleTxtCta";
import useDimension from "@/components/useDimension";
import {useScroll, useTransform, motion} from "framer-motion";

const ImageMlleBlock = ({data, isExternalLink2}) => {

    const container = useRef(null)

    const {height} = useDimension()
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end ', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, height / 6])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -height / 3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height / 6])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height / 6])
    const y5 = useTransform(scrollYProgress, [0, 1], [0, height / 6])

    return (

        <div ref={container} className="gridCtn py-60 gap-y-10">

            <motion.div style={{y}}
                        className="col-start-2 col-end-5 object-cove aspect-[240/240] w-full h-full mobile:hidden">
                <Image
                    src={urlForImage(data?.mlleBLock.image1.asset._ref)}
                    width={240}
                    height={240}
                    alt="Mademoiselle By Barro"
                />
            </motion.div>


            <motion.div style={{y: y2}}
                        className="col-start-10 col-end-13 object-cover w-full aspect-[240/240] mobile:hidden">
                <Image
                    src={urlForImage(data?.mlleBLock.image2.asset._ref)}
                    width={240}
                    height={240}
                    alt="Mademoiselle By Barro"
                />
            </motion.div>

            <TitleTxtCta
                text={data?.mlleBLock.richText}
                link={data?.mlleBLock.navItems?.[0].navItemUrl.linkUrl}
                linkText={data?.mlleBLock.navItems?.[0].text}
                isExternalLink={isExternalLink2}
                className="col-start-4 col-end-10 text-Black w-full items-center justify-center text-center mobile:col-span-12"
            />

            <motion.div
                className="col-start-1 col-end-4 object-cover w-full row-start-2 aspect-[240/240] mobile:hidden"
                style={{y: y3}}
            >
                <Image
                    src={urlForImage(data?.mlleBLock.image3.asset._ref)}
                    width={240}
                    height={240}
                    alt="Mademoiselle By Barro"
                />
            </motion.div>

            <motion.div
                className="col-start-3 col-end-6 object-cover w-full aspect-[240/240] mobile:hidden"
                style={{y: y4}}
            >
                <Image
                    src={urlForImage(data?.mlleBLock.image4.asset._ref)}
                    width={240}
                    height={240}
                    alt="Mademoiselle By Barro"
                />
            </motion.div>

            <motion.div
                className="col-start-9 col-end-12 object-cover w-full aspect-[240/240] mobile:hidden"
                style={{y: y5}}
            >
                <Image
                    src={urlForImage(data?.mlleBLock.image5.asset._ref)}
                    width={240}
                    height={240}
                    alt="Mademoiselle By Barro"
                />
            </motion.div>

        </div>
    )

}

export default ImageMlleBlock