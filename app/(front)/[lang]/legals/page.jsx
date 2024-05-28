import {sanityFetch} from "@/sanity/lib/client";
import TemplateLegals from "@/components/TemplateLegals";

const LegalsPage = async () => {

    const legalsData = await sanityFetch({
        query: `*[_type  == "legals" && language == "fr"][1]`,
        tags: ['legals']
    })

    return (
        <>
            <TemplateLegals data={legalsData}/>
        </>
    )
}

export default LegalsPage