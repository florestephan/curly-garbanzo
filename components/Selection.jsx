"use client"

import {useMediaQuery} from "@/hooks/useMediaQuery";
import {PortableText} from "@portabletext/react";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import Cta from "@/components/Cta";
import {useTransform, useScroll, motion} from "framer-motion";
import {useRef} from "react";
import useDimension from "@/components/useDimension";

const Selection = ({value, className}) => {

    const isExternalLink = value?.navItems?.[0].navItemUrl.externalContent

    const container = useRef(null)
    const {height} = useDimension()
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['center end', 'end start'] // indique le début de 0 et la fin de 1
    })

    // Utilisez le hook pour vérifier la largeur de l'écran
    const isMobile = useMediaQuery('(max-width: 1000px)');

    // Calculez les valeurs de transformation, conditionnées ou non
    const baseTransform = [0, 1];
    const yPos = [0, height / 6];
    const yNegPos = [0, -height / 9];
    const y = useTransform(scrollYProgress, baseTransform, isMobile ? [0, 0] : yPos);
    const yNeg = useTransform(scrollYProgress, baseTransform, isMobile ? [0, 0] : yNegPos);

    return (
        <div className={`selection pb-20 col-span-12 ${className}`}>
            <div className="title--head">
                <PortableText value={value.richText}/>

                <div ref={container}
                     className="container__cat grid grid-cols-10 gap-x-10 pt-20 mobile:grid mobile:grid-cols-2 mobile:gap-x-3.5">

                    <motion.div style={{y: yNeg}}
                                className="col-span-2 block--one flex items-center flex-col mobile:col-span-1">

                        <div className="containerImg relative aspect-[240/240] w-full h-auto">
                            <Image
                                src={urlForImage(value?.image1.asset._ref)}
                                width={240}
                                height={240}
                                // fill={true}
                                alt={value?.text1}
                                className="object-cover mobile:w-full mobile:h-full"
                            />
                        </div>

                        <h3 className="pt-10 uppercase mobile:pt-4 mobile:pb-6">{value.text1}</h3>
                    </motion.div>

                    <motion.div style={{y}}
                                className="col-span-2 block--two flex items-center flex-col mobile:col-span-1">
                        <div className="containerImg relative aspect-[240/240] w-full h-auto">
                            <Image
                                src={urlForImage(value?.image2.asset._ref)}
                                width={240}
                                height={240}
                                // fill={true}
                                alt={value?.text2}
                                className="object-cover mobile:w-full mobile:h-full"
                            />
                        </div>
                        <h3 className="pt-10 uppercase mobile:pt-4 mobile:pb-6 break-all">{value.text2}</h3>
                    </motion.div>

                    <motion.div style={{y: yNeg}}
                                className="col-span-2 block--three flex items-center flex-col mobile:col-span-1">
                        <div className="containerImg relative aspect-[240/240] w-full h-auto">
                            <Image
                                src={urlForImage(value?.image3.asset._ref)}
                                width={240}
                                height={240}
                                // fill={true}
                                alt={value?.text3}
                                className="object-cover mobile:w-full mobile:h-full"
                            />
                        </div>
                        <h3 className="pt-10 uppercase mobile:pt-4 mobile:pb-6">{value.text3}</h3>
                    </motion.div>

                    <motion.div style={{y}}
                                className="col-span-2 block--four flex items-center flex-col mobile:col-span-1">

                        <div className="containerImg relative aspect-[240/240] w-full h-auto">
                            <Image
                                src={urlForImage(value?.image4.asset._ref)}
                                width={240}
                                height={240}
                                // fill={true}
                                alt={value?.text4}
                                className="object-cover mobile:w-full mobile:h-full"
                            />
                        </div>

                        <h3 className="pt-10 uppercase mobile:pt-4 mobile:pb-6">{value.text4}</h3>
                    </motion.div>

                    <motion.div
                        className="col-span-2 block--five flex items-center flex-col mobile:col-span-2 mobile:justify-self-center mobile:w-1/2">
                        <div className="containerImg relative aspect-[240/240] w-full h-auto">
                            <Image
                                src={urlForImage(value?.image5.asset._ref)}
                                width={240}
                                height={240}
                                // fill={true}
                                alt={value?.text5}
                                className="object-cover mobile:w-full mobile:h-full"
                            />
                        </div>
                        <h3 className="pt-10 uppercase mobile:pt-4 mobile:pb-6">{value.text5}</h3>

                    </motion.div>
                </div>
            </div>
            <div className="cta mt-60 flex justify-center">
                <Cta
                    link={value?.navItems?.[0].navItemUrl.linkUrl}
                    linkText={value?.navItems?.[0].text}
                    isExternalLink={isExternalLink}/>
            </div>
        </div>
    )
}

export default Selection