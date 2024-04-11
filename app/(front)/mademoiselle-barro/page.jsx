import {sanityFetch} from "@/sanity/lib/client";
import {main} from "prisma/preinstall";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import TitleTxtCta from "@/components/TitleTxtCta";
import HistoryInfoBullet from "@/components/HistoryInfoBullet";
import Selection from "@/components/Selection";
import ImageRepeater from "@/components/ImageRepeater";

export const MademoisellePage = async () => {


    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `*[_type == 'mllebarro' && language == "fr"][0]`,
        tags: ['mllebarro']
    })

    const isExternalLink = data?.navItems?.[0].navItemUrl.externalContent

    return (
        <main>
            <HeroBanner title={data?.titrehero}/>

            <section className="relative bg-Pink mb-10 pb-10">
                <div className="gridCtn gap-y-10">
                    <Image
                        priority={true}
                        src={urlForImage(data?.image.asset._ref)}
                        width={364}
                        height={294}
                        alt={data?.titrehero}
                        className="m-auto absolute left-0 right-0 -translate-y-1/2"
                    />

                    <TitleTxtCta
                        text={data?.richText}
                        link={data?.navItems?.[0].navItemUrl.linkUrl}
                        linkText={data?.navItems?.[0].text}
                        isExternalLink={isExternalLink}
                        className="py-44 col-start-4 col-end-10 text-Black w-full items-center justify-center text-center"
                    />

                    <Selection value={data?.selectionBlock} className="text-Black"/>

                    <ImageRepeater data={data?.imgRepeater}/>

                </div>
            </section>
        </main>
    )
}

export default MademoisellePage