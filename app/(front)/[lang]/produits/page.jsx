import {sanityFetch} from "@/sanity/lib/client";
import SliderHeroProduits from "@/components/Slider/sliderHeroProduits";

import FilterIndexPage from "@/components/FilterIndexPage/FilterIndexPage";
import {getInitialData} from "@/components/FilterIndexPage/initialData";

export const ProduitsPage = async ({params}) => {

    const {countProducts, products, collections, jewelryTypes, stones} = await getInitialData();


    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `*[_type == 'produitsHero' && language == "${params.lang}"][0]`,
        tags: ['produitsHero']
    })

    return (
        <main className="min-h-svh">
            <div className="gridCtn">
                <SliderHeroProduits value={data.slider}/>
                <FilterIndexPage
                    informationsProducts={data.informationsProducts}
                    initialProducts={products}
                    collections={collections}
                    jewelryTypes={jewelryTypes}
                    stones={stones}
                    count={countProducts}
                />
            </div>
        </main>
    )
}

export default ProduitsPage
