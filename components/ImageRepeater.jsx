"use client"

import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";

const ImageRepeater = ({data}) => {

    return (
        <>
            {data?.blocks.map(el => (
                el._type === "leftImgBlock" ? (
                    <>
                        <Image
                            src={urlForImage(el.imageLeft.asset._ref)}
                            width={800}
                            height={540}
                            alt="barro bijoux"
                            className="col-start-1 col-end-8 w-full object-cover"
                        />

                        <Image
                            src={urlForImage(el.imageRight.asset._ref)}
                            width={540}
                            height={540}
                            alt="barro bijoux"
                            className="col-start-8 col-end-13 w-full object-cover"
                        />
                    </>
                ) : (
                    <>
                        <Image
                            src={urlForImage(el.imageLeft.asset._ref)}
                            width={540}
                            height={540}
                            alt="barro bijoux"
                            className="col-start-1 col-end-6 w-full object-cover"
                        />

                        <Image
                            src={urlForImage(el.imageRight.asset._ref)}
                            width={800}
                            height={540}
                            alt="barro bijoux"
                            className="col-start-6 col-end-13 w-full object-cover"
                        />
                    </>
                )
            ))}
        </>
    )
}

export default ImageRepeater