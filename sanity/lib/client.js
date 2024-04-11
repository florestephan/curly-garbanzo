import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, useCdn} from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

//Revalidate tag by function sanityFetch
export async function sanityFetch({query, params = {}, tags}) {
    return client.fetch(query, params, {
        next: {
            // revalidate: 30, // for simple, time-based revalidation
            tags, // for tag-based revalidation
        },
    });
}
