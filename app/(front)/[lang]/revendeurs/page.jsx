import '@/components/next-store-locator/dist/style.css'
import NextStoreLocator from "@/components/next-store-locator";
import {sanityFetch} from "@/sanity/lib/client";
import TitleTxtCta from "@/components/TitleTxtCta";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";

const mapOptions = {
    center: {lat: 46.227638, lng: 2.213749},
    zoom: 6,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [{featureType: 'poi', elementType: 'labels', stylers: [{visibility: 'off'}]}],
};

const Page = async () => {

    const locations = await sanityFetch({
        query: `*[_type  == "Storelocator"]`,
        tags: ['Storelocator']
    })

    const data = await sanityFetch({
        query: `*[_type  == "revendeurs" && language == "fr"][0]`,
        tags: ['revendeurs']
    })

    const isExternalLink = data?.footerTitleMap?.navItems?.[0].navItemUrl.externalContent


    return (
        <main className="w-full pt-8">
            <TitleTxtCta
                text={data?.headerTitleMap.richText}
                link={data?.headerTitleMap.navItems?.[0].navItemUrl.linkUrl}
                linkText={data?.headerTitleMap.navItems?.[0].text}
                isExternalLink={false}
                className="[&>a>span:last-child]:bg-GreyM text-center pt-40 pb-24 items-center justify-center w-full"
            />
            {locations.length > 0 && (
                <NextStoreLocator
                    locationsProp={locations}
                    // mapOptionsProp={mapOptions} utilise les options de utils.js
                    iconPaths={{markerIcon: 'custom-marker.svg'}}
                    apiKey={process.env.GOOGLE_MAP_KEY}
                />
            )}


            <div className="gridCtn py-24 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
                <Image
                    src={urlForImage(data?.footerTitleMap.image.asset._ref)}
                    width={364}
                    height={294}
                    alt={data?.titlePage}
                    className="col-start-2 col-end-6 object-cover w-full mobile:w-fit"
                />

                <TitleTxtCta
                    text={data?.footerTitleMap.richText}
                    link={data?.footerTitleMap.navItems?.[0].navItemUrl.linkUrl}
                    linkText={data?.footerTitleMap.navItems?.[0].text}
                    isExternalLink={isExternalLink}
                    className="[&>a>span:last-child]:bg-GreyM col-start-7 col-end-13 text-left pb-24 w-full mobile:flex mobile:flex-col mobile:items-center mobile:pt-8"
                />

            </div>
        </main>
    )
        ;
};

export default Page;