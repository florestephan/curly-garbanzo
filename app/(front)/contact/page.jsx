import {sanityFetch} from "@/sanity/lib/client";
import {Contact} from "@/components/Contact/Contact";

export const ContactPage = async () => {

    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `* [_type == "siteConfig"][0]`,
        tags: ['siteConfig']
    })
    console.log('test')
    return (
        <main className="min-h-svh">
            <div className="gridCtn">
                <div className="wrapperHeaderTitle col-span-12 mt-52 mb-24 text-center">
                    <h2 className="w-full text-90">
                        CONTACT
                    </h2>
                    <a href={`tel:${data?.number}`} className="block w-full">Tel. {data?.number}</a>
                </div>

                <section className="col-span-12 mb-40">
                    <Contact/>
                </section>
            </div>
        </main>
    )
}

export default ContactPage

