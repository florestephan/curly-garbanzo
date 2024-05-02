import {PortableText} from "@portabletext/react";
import Cta from "@/components/Cta";

const TitleTxtCta = ({className, text, link, linkText, isExternalLink}) => {

    return (
        <div className={`cta inline-flex flex-col gap-y-10 ${className}`}>
            <PortableText value={text}/>

            <Cta isExternalLink={isExternalLink} link={link} linkText={linkText}/>
        </div>
    )
}

export default TitleTxtCta