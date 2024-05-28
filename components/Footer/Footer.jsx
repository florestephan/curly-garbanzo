import ToggleLang from "@/components/Footer/ToggleLang";
import {sanityFetch} from "@/sanity/lib/client";
import Link from "next/link";

export default async function Footer({language}) {

    const data = await sanityFetch({
        // query: `*[_id  == "ffc12c19-e0a3-4fe8-a86c-ee2057e7d869"][0]`,
        query: `*[_type == 'nav'][1].navItems`,
        tags: ['nav']
    })

    return (
        <footer className="mx-2.5 mb-8 mobile:mx-0">
            <div className="gridCtn pb-5 mobile:flex mobile:flex-col mobile:items-center">

                <svg
                    className="col-start-1 col-end-3 mb-7 mobile:row-start-1 mobile:col-span-12 mobile:place-self-center mobile:mb-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="29"
                    fill="none"
                    viewBox="0 0 150 29"
                >
                    <path
                        fill="#1C1B1A"
                        d="M116.046 8.636c0-3.284-1.459-5.06-2.284-5.83C111.544.68 108.823.643 106.576.606H96.048v3.284h10.783c1.671.037 3.524.037 4.684 2.008.511.813.766 1.85.766 2.896 0 .97-.219 2.008-.875 2.896-1.445 2.045-3.991 2.082-5.983 2.082h-9.368v3.21h9.113l8.674 10.89h4.75l-9.433-11.51c1.707-.313 6.894-1.201 6.894-7.725h-.007zm-93.59 4.725c.073 0 1.014-.463 1.27-.62 1.16-.768 2.32-2.314 2.32-4.978 0-1.12-.183-2.702-1.27-4.21C22.712.776 19.188.657 16.43.657H0v27.267h16.43c2.758 0 6.274 0 8.594-2.083 1.525-1.351 2.284-3.404 2.284-5.524 0-5.21-3.735-6.56-4.86-6.949l.008-.007zM3.626 3.82h12.768c1.342 0 2.94 0 4.21.852.904.656 1.67 1.739 1.67 3.358 0 1.314-.547 2.822-1.817 3.553-1.014.62-2.327.62-3.45.62H3.625V3.822zm18.538 19.624c-1.379 1.239-3.122 1.314-4.647 1.314H3.626v-9.42h13.891c1.488 0 3.195.037 4.502 1.12.291.268 1.524 1.276 1.524 3.552 0 .583-.036 2.202-1.379 3.441v-.007zM41.944.62L28.7 27.923h4.064l3.115-6.717h15.744l3.116 6.718h4.173L45.788.62h-3.845zm-4.539 17.413L42.82 6.718c.218-.508.43-.97.612-1.47.146-.389.256-.777.365-1.12.073.35.183.694.292 1.045.182.462.401.925.576 1.395l5.407 11.473H37.404v-.008zM134.336 0c-7.653 0-15.452 4.56-15.452 14.637 0 5.755 2.685 9.151 5.18 11.01 3.013 2.284 6.785 3.015 10.52 3.015 8.237 0 15.416-4.672 15.416-13.98S143.295.037 134.336 0zm.255 25.296c-3.706 0-7.441-.963-9.827-3.941-1.744-2.082-2.254-4.83-2.254-6.957 0-8.068 6.092-10.927 11.425-11.076 7.004-.195 12.41 3.784 12.41 10.964 0 4.636-2.284 11.01-11.754 11.01zM66.004 2.8c-.831.776-2.283 2.553-2.283 5.83 0 6.523 5.187 7.412 6.902 7.725l-9.434 11.51h4.75l8.674-10.89H86.98v10.89h4.158V.597h-17.94c-2.247.037-4.976.075-7.186 2.202h-.008zM87.01 13.771H74.343c-1.991 0-4.538-.037-5.982-2.082-.657-.888-.876-1.933-.876-2.896 0-1.045.256-2.083.766-2.896 1.16-1.97 3.006-1.97 4.684-2.008H87.01v9.882z"
                    ></path>
                </svg>

                <ToggleLang translations={language}/>

                <div
                    className="container col-start-7 col-end-13 row-start-1 mobile:col-span-12 mobile:grid mobile:grid-cols-2 mobile:text-left mobile:justify-items-start mobile:row-start-2 mobile:pb-5">
                    <ul className=" text-Black text-12 grid grid-cols-4 text-right mb-5 mobile:flex mobile:flex-col mobile:text-left mobile:gap-y-5">
                        {data.map((el, index) => (
                            index <= data.length - 4 && (
                                <li key={el._key}>
                                    <Link className="cursor-pointer mobile:text-12" href={`/${el.navItemUrl.linkUrl}`}>
                                        {el.text}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>

                    <ul className="text-Black text-12 grid grid-cols-4 mobile:flex mobile:flex-col mobile:gap-y-5"
                        dir="rtl">
                        {data.map((el, index) => (
                            index >= data.length - 3 && (
                                <li key={el._key}>
                                    <Link className="cursor-pointer mobile:text-12" href={`/${el.navItemUrl.linkUrl}`}>
                                        {el.text}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </div>

                <Link
                    className="col-start-7 col-end-13 mt-14 text-right w-full block pt-8 text-Black text-8 mobile:col-span-12 mobile:text-center"
                    href="mashvp.com">Site par
                    Mashvp</Link>

            </div>
        </footer>
    );
}
