import {sanityFetch} from "@/sanity/lib/client";

const PRODUCTS_PER_PAGE = 10;

const productQuery = `
  *[_type == "product"] | order(_createdAt desc)[$start...$end] {
    _id,
    title,
    slug,
    "collection": collection->title,
    "type": type->title,
    "stone": stone->title,
    larefe,
    price,
    image,
    keyvalueoption
  }
`;

const collectionsQuery = `*[_type == "collection"]`;
const jewelryTypesQuery = `*[_type == "jewelryType"]`;
const stonesQuery = `*[_type == "stone"]`;

export async function getInitialData() {
    const start = 0;
    const end = PRODUCTS_PER_PAGE;

    const countProducts = await sanityFetch({
        query: "*[_type == 'product']"
    })

    const products = await sanityFetch({
        query: productQuery,
        params: {start, end},
        tags: ["product"]
    });

    const collections = await sanityFetch({query: collectionsQuery});
    const jewelryTypes = await sanityFetch({query: jewelryTypesQuery});
    const stones = await sanityFetch({query: stonesQuery});

    return {
        products,
        collections,
        jewelryTypes,
        stones,
        countProducts
    };
}
