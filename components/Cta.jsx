import Link from "next/link";
import './TitleTxtCta.scss'

const Cta = ({link, linkText, isExternalLink}) => {
    return (
        <>
            {linkText && (
                <Link
                    className="group inline-flex w-fit items-center relative text-cta border h-12 px-8 border-GreyBlue z-10"
                    target={`${isExternalLink ? "_blank" : ""}`}
                    href={link}>
                    {linkText}
                    <span className="w-5 border border-GreyBlue absolute"></span>
                    <span className="w-5 border border-GreyBlue absolute"></span>
                    <span className="w-5 border border-GreyBlue absolute"></span>
                    <span className="w-5 border border-GreyBlue absolute"></span>
                    <span
                        className={`absolute opacity-0 m-1 -z-10 transition duration-200 inset-0 group-hover:opacity-100`}></span>
                </Link>
            )}
        </>
    )
}

export default Cta