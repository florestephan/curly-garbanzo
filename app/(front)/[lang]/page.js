import {sanityFetch} from "@/sanity/lib/client";
import Image from 'next/image'
import {urlForImage} from "@/sanity/lib/image";
import HeroBanner from "@/components/HeroBanner";
import {PortableText} from "@portabletext/react";
import TitleTxtCta from "@/components/TitleTxtCta";
import Selection from "@/components/Selection";
import Slider from "@/components/Slider/slider";

export default async function Home({params}) {

    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `*[_type == 'homepage' && language == "${params.lang}"][0]`,
        tags: ['homepage']
    })

    const isExternalLink = data?.leftBlock?.navItems?.[0].navItemUrl.externalContent
    const isExternalLinkMlle = data?.mademoiselleBlock?.navItems?.[0].navItemUrl.externalContent
    const isExternalLinPdv = data?.pointdevente?.navItems?.[0].navItemUrl.externalContent

    return (
        <>
            <main>
                <HeroBanner title={data?.titrehero}/>
                <section className="relative bg-BlackP">
                    <div className="gridCtn">
                        <Image
                            priority={true}
                            src={urlForImage(data?.image?.asset._ref)}
                            width={364}
                            height={294}
                            alt={data?.titrehero}
                            className="m-auto absolute left-0 right-0 -translate-y-1/2 mobile:w-[182px] mobile:h-[147px]"
                        />


                        <div className="h-[40svh] col-span-12 flex justify-center items-center w-full pt-64">
                            <svg className="" width="20" height="14"
                                 viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 14L0 4L5 0H10H15L20 4L10 14Z" fill="white"/>
                            </svg>
                        </div>

                        <TitleTxtCta
                            text={data?.leftBlock.richText}
                            link={data?.leftBlock.navItems?.[0].navItemUrl.linkUrl}
                            linkText={data?.leftBlock.navItems?.[0].text}
                            isExternalLink={isExternalLink}
                            backgroundColor="black"
                            className="[&>a>span:last-child]:bg-Black col-span-4 block--left text-white pt-64 pb-64 mobile:col-span-12"
                        />

                        <Selection value={data?.selectionBlock} className="text-white"/>
                    </div>
                </section>
                <section className="bg-Pink">
                    <div className="gridCtn pt-24 pb-24">
                        <TitleTxtCta
                            text={data?.mademoiselleBlock.richText}
                            link={data?.mademoiselleBlock.navItems?.[0].navItemUrl.linkUrl}
                            linkText={data?.mademoiselleBlock.navItems?.[0].text}
                            isExternalLink={isExternalLinkMlle}
                            className="[&>a>span:last-child]:bg-white col-span-4 black--left text-Black mobile:col-span-12"
                        />

                        <Image
                            src={urlForImage(data?.mademoiselleBlock.image1.asset._ref)}
                            width={335}
                            height={335}
                            alt="photo de bague"
                            className="object-cover col-start-1 pt-32 col-span-3 mobile:row-span-1 mobile:row-start-1 mobile:pt-0 mobile:col-span-6 mobile:pb-10"
                        />

                        <Image
                            src={urlForImage(data?.mademoiselleBlock.image2.asset._ref)}
                            width={680}
                            height={520}
                            alt="photo de bague"
                            className="object-cover col-start-7 col-end-13 -mt-16 mobile:col-span-12 mobile:pt-40"
                        />
                    </div>
                </section>
                <section className="text-center pt-24 pb-24 text-Black">
                    <PortableText value={data?.revendeurs.richText}/>
                    <Slider value={data?.revendeurs.slider}/>
                </section>

                <section className="border-t-[1px] border-GreyBlue text-Black mb-24">
                    <TitleTxtCta
                        text={data?.pointdevente.richText}
                        link={data?.pointdevente.navItems?.[0].navItemUrl.linkUrl}
                        linkText={data?.pointdevente.navItems?.[0].text}
                        isExternalLink={isExternalLinPdv}
                        backgroundColor="white"
                        className="[&>a>span:last-child]:bg-GreyM text-center pt-40 pb-24 items-center justify-center w-full"
                    />
                </section>
            </main>
        </>
    );
}
