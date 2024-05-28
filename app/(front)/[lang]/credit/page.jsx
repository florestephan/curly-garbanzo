import {sanityFetch} from "@/sanity/lib/client";
import TemplateLegals from "@/components/TemplateLegals";

const CreditPage = async () => {

    const dataCredit = await sanityFetch({
        query: `*[_type  == "legals" && language == "fr"][0]`,
        tags: ['legals']
    })
    return (
        <>
            <TemplateLegals data={dataCredit}/>
        </>
    )
}

export default CreditPage