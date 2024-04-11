import {sanityFetch} from "@/sanity/lib/client";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import TitleTxtCta from "@/components/TitleTxtCta";
import HistoryInfoBullet from "@/components/HistoryInfoBullet";
import ImageMlleBlock from "@/components/ImageMlleBlock";

export const HistoirePage = async () => {

    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `*[_type == 'histoire' && language == "fr"][0]`,
        tags: ['histoire']
    })

    const isExternalLink = data?.rightBlock?.navItems?.[0].navItemUrl.externalContent
    const isExternalLink2 = data?.mlleBLock?.navItems?.[0].navItemUrl.externalContent
    const isExternalLink3 = data?.speBlock?.navItems?.[0].navItemUrl.externalContent
    const isExternalLinPdv = data?.pdv?.navItems?.[0].navItemUrl.externalContent


    return (
        <main>
            <HeroBanner title={data?.titrehero}/>
            <section className="about bg-BlackP">
                <div className="gridCtn pt-20 pb-32">
                    <Image
                        src={urlForImage(data?.imageleft.asset._ref)}
                        width={320}
                        height={480}
                        alt={data?.titrehero}
                        className="col-start-3 col-end-6 object-cover w-full h-full"
                    />

                    <TitleTxtCta
                        text={data?.rightBlock.richText}
                        link={data?.rightBlock.navItems?.[0].navItemUrl.linkUrl}
                        linkText={data?.rightBlock.navItems?.[0].text}
                        isExternalLink={isExternalLink}
                        className="col-start-7 col-end-11 text-white"
                    />

                    <HistoryInfoBullet data={data}/>
                </div>
            </section>
            <section className="bg-Pink">
                <ImageMlleBlock data={data} isExternalLink2={isExternalLink2}/>
            </section>


            <section className="my-20">
                <div className="relative gridCtn">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1446"
                        height="844"
                        fill="none"
                        viewBox="0 0 1446 844"
                        className="col-span-12 w-full h-full"
                    >
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M1443 411.247l-212.91-124.474 130.79-51.467.29-.376 11.85 8.766L1443 411.247z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M1143.74 416.109l86.35-129.357L1443 411.225l-188.78 121.969-110.48-117.085zM507.267 138.369l223.915 62.237-291.217 59.857 67.302-122.094zM318.626 432.764l121.34 172.434-207.689-47.961 86.349-124.473zM922.646 128.855l75.485 122.094-266.949-50.34 191.464-71.754zM922.649 128.855L714.959 2.003 989.95 37.817l-67.301 91.038zM1254.22 533.202l-220.96 45.581 110.48-162.666 110.48 117.085z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M3 442.304l202.328-117.21 113.298 107.693-86.349 124.474L3 442.304zM1267.76 708.027l-229.7 89.411-104.689-87.031 334.389-2.38zM998.13 250.942l-75.485-122.094 283.035-9.643 24.41 167.551-231.96-35.814zM760.813 842l-272.31-26.297 75.344-88.534L760.813 842zM1033.26 578.78l220.96-45.581 13.54 174.813-334.389 2.379 99.889-131.611z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M1205.68 119.213l-283.035 9.642 67.302-91.038 215.733 81.396zM507.267 138.37l-312.804 7.263 215.732-98.176 97.072 90.913zM1143.74 416.114L998.132 250.943l231.958 35.814-86.35 129.357zM488.5 815.708l-248.183-88.534h323.527L488.5 815.708zM1254.22 533.206l153.79 38.444-140.25 136.369-13.54-174.813zM232.277 557.24l207.689 47.961 123.88 121.969H240.319l-8.042-169.93zM760.812 842L563.846 727.169l180.741-69.375 188.783 52.595L760.812 842zM81.166 597.959L3 442.304l229.277 114.957-151.111 40.698z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M1143.74 416.124l-110.48 162.667-288.672 79.016-304.621-52.594-121.341-172.434 121.341-172.31 291.217-59.857 266.949 50.34 145.607 165.172zM205.327 325.081l-10.864-179.447 312.804-7.263-67.302 122.094-234.638 64.616z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M714.958 2.009l207.69 126.852-191.464 71.754-223.916-62.237 207.69-136.37zM507.268 138.37l-97.073-90.913L714.957 2 507.268 138.37zM46.175 281.996l159.153 43.077L3 442.284l43.175-160.288z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M205.328 325.081L46.175 282.004l148.289-136.37 10.864 179.447z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M439.966 260.461L318.625 432.77 205.327 325.077l234.639-64.616zM1230.09 286.756l-24.41-167.551 155.49 115.708-.29.375-130.79 51.468zM1033.26 578.781l-99.89 131.611-188.783-52.594 288.673-79.017zM81.164 597.938l151.111-40.698 8.042 169.93L81.164 597.938zM563.845 727.17l-123.88-121.969 304.621 52.595-180.741 69.374zM1408.01 571.642l-153.79-38.444L1443 411.229l-34.99 160.413z"
                        ></path>
                        <path
                            stroke="#FAFAFA"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                            d="M933.37 710.389l104.69 87.031-10.3 3.882L760.813 842 933.37 710.389z"
                        ></path>
                    </svg>

                    <TitleTxtCta
                        text={data?.speBlock.richText}
                        link={data?.speBlock.navItems?.[0].navItemUrl.linkUrl}
                        linkText={data?.speBlock.navItems?.[0].text}
                        isExternalLink={isExternalLink3}
                        className="absolute h-full col-start-4 col-end-10 text-Black w-full items-center justify-center text-center"
                    />
                </div>
            </section>

            <section className="border-t-[1px] border-GreyBlue text-Black mb-24">
                <TitleTxtCta
                    text={data?.pdv.richText}
                    link={data?.pdv.navItems?.[0].navItemUrl.linkUrl}
                    linkText={data?.pdv.navItems?.[0].text}
                    isExternalLink={isExternalLinPdv}
                    className="text-center pt-40 pb-24 items-center justify-center w-full"
                />
            </section>
        </main>
    )
}

export default HistoirePage