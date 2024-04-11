"use client"

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

    //transform la value entre 0 et 1 en valeur y pour le parllax
//y positif et yneg nefatif
    const y = useTransform(scrollYProgress, [0, 1], [0, height / 6])
    const yNeg = useTransform(scrollYProgress, [0, 1], [0, -height / 9])

    return (
        <div className={`selection pb-20 col-span-12 ${className}`}>
            <div className="title--head">
                <PortableText value={value.richText}/>

                <div ref={container} className="container__cat  flex justify-between pt-20">

                    <motion.div style={{y: yNeg}} className="block--one flex items-center flex-col">
                        <Image
                            src={urlForImage(value?.image1.asset._ref)}
                            width={240}
                            height={240}
                            alt={value?.text1}
                            className="object-cover"
                        />
                        <h3 className="pt-10 uppercase">{value.text1}</h3>
                    </motion.div>

                    <motion.div style={{y}} className="block--two flex items-center flex-col">
                        <Image
                            src={urlForImage(value?.image2.asset._ref)}
                            width={240}
                            height={240}
                            alt={value?.text2}
                            className="object-cover"
                        />
                        <h3 className="pt-10 uppercase break-all">{value.text2}</h3>
                    </motion.div>

                    <motion.div style={{y: yNeg}} className="block--three flex items-center flex-col">
                        <Image
                            src={urlForImage(value?.image3.asset._ref)}
                            width={240}
                            height={240}
                            alt={value?.text3}
                            className="object-cover"
                        />
                        <h3 className="pt-10 uppercase">{value.text3}</h3>
                    </motion.div>

                    <motion.div style={{y}} className="block--four flex items-center flex-col">
                        <Image
                            src={urlForImage(value?.image4.asset._ref)}
                            width={240}
                            height={240}
                            alt={value?.text4}
                            className="object-cover"
                        />
                        <h3 className="pt-10 uppercase">{value.text4}</h3>
                    </motion.div>

                    <motion.div className="block--five flex items-center flex-col">
                        <Image
                            src={urlForImage(value?.image5.asset._ref)}
                            width={240}
                            height={240}
                            alt={value?.text5}
                            className="object-cover"
                        />
                        <h3 className="pt-10 uppercase">{value.text5}</h3>

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