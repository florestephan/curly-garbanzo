import '@/components/next-store-locator/dist/style.css'
import NextStoreLocator from "@/components/next-store-locator";
import {sanityFetch} from "@/sanity/lib/client";

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


    return (
        <main className="w-full pt-8">
            <div className="w-full inline-flex justify-center pb-8">
                <h1 className="text-3xl font-bold">Next Store Locator</h1>
            </div>
            {locations.length > 0 && (
                <NextStoreLocator
                    locationsProp={locations}
                    // mapOptionsProp={mapOptions} utilise les options de utils.js
                    iconPaths={{markerIcon: 'images/custom-marker.svg'}}
                    apiKey={process.env.GOOGLE_MAP_KEY}
                />
            )}
        </main>
    );
};

export default Page;