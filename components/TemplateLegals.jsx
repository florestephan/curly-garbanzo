import {PortableText} from "@portabletext/react";

const TemplateLegals = ({data}) => {


    return (
        <main className="pt-80 pb-40">
            <div className="gridCtn text-Black">
                <h1 className="leading-none uppercase col-span-12 text-center pb-20">{data?.herotitle}</h1>

                <div className="col-start-2 col-end-7 mobile:col-span-12 [&>p]:mt-2.5">
                    <PortableText value={data?.richText}/>
                </div>
                <div className="col-start-7 col-end-12 mobile:col-span-12 [&>p]:mt-2.5">
                    <PortableText value={data?.richTextRight}/>
                </div>
            </div>
        </main>
    )
}

export default TemplateLegals