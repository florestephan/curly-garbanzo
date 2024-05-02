import Link from "next/link";

export const _list = ({pathname, data}) => {

    return (
        <ul className="grid grid-cols-[minmax(min-content,_1fr)_auto_minmax(min-content,_1fr)] items-center w-ful text-Black">
            <div className="flex gap-14 items-baseline">
                {data && data.map((el, index) => (
                    index <= data.length - 3 && (
                        <li key={el._key}>
                            <Link
                                className={`relative leading-none transition group flex items-center justify-center flex-col link ${pathname === `/${el.navItemUrl.linkUrl}` ? 'active opacity-50' : ''}`}
                                href={`/${el.navItemUrl.linkUrl}`}>
                                {el.text}

                                <svg
                                    className={`absolute left-0 right-0 -bottom-3 w-full ${pathname === `/${el.navItemUrl.linkUrl}` ? 'active opacity-50' : 'group-hover:opacity-100 opacity-0 transition'}`}
                                    width="10" height="7"
                                    viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7L0 2L2.5 0H5H7.5L10 2L5 7Z" fill="#484848"/>
                                </svg>
                            </Link>
                        </li>
                    )
                ))}
            </div>

            <li>
                <Link className={`link relative ${pathname === '/' ? 'active opacity-50' : ''}`} href="/">
                    <svg
                        width={86}
                        height={16}
                        viewBox="0 0 86 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M66.2566 4.82209C66.2566 2.98828 65.4235 1.99635 64.9528 1.56707C63.6865 0.379265 62.1328 0.358427 60.8498 0.337588H54.8389V2.1714H60.9956C61.9495 2.19224 63.0075 2.19224 63.6698 3.29252C63.9614 3.74681 64.1072 4.32613 64.1072 4.90961C64.1072 5.45142 63.9822 6.03074 63.6073 6.5267C62.7826 7.66866 61.3288 7.6895 60.1916 7.6895H54.8431V9.48164H60.0458L64.9986 15.5624H67.7104L62.3244 9.13571C63.2991 8.96067 66.2608 8.4647 66.2608 4.82209H66.2566ZM12.8214 7.46028C12.8631 7.46028 13.4004 7.20187 13.5462 7.11435C14.2086 6.68507 14.8709 5.82235 14.8709 4.33446C14.8709 3.7093 14.7667 2.82574 14.1461 1.98385C12.9672 0.433446 10.9553 0.366762 9.38073 0.366762H0V15.5916H9.38073C10.9553 15.5916 12.9631 15.5916 14.2877 14.4288C15.1583 13.6744 15.5915 12.5283 15.5915 11.3446C15.5915 8.43553 13.4588 7.68117 12.8173 7.46444L12.8214 7.46028ZM2.07026 2.13389H9.3599C10.1264 2.13389 11.0386 2.13389 11.7634 2.60901C12.2799 2.97577 12.7173 3.5801 12.7173 4.4845C12.7173 5.21803 12.4049 6.05991 11.6801 6.46835C11.1011 6.81427 10.3513 6.81427 9.7098 6.81427H2.07026V2.13389ZM12.6548 13.0909C11.8675 13.7828 10.872 13.8244 10.0014 13.8244H2.07026V8.56473H10.0014C10.8512 8.56473 11.8259 8.58557 12.5715 9.18989C12.7381 9.33993 13.4421 9.90258 13.4421 11.1737C13.4421 11.4988 13.4213 12.4032 12.6548 13.0951V13.0909ZM23.9475 0.345923L16.3871 15.5916H18.7073L20.486 11.8406H29.4752L31.2538 15.5916H33.6365L26.1427 0.345923H23.9475ZM21.3566 10.0693L24.4474 3.75098C24.5723 3.46757 24.6931 3.20917 24.7973 2.92993C24.8806 2.71321 24.9431 2.49648 25.0056 2.30477C25.0472 2.50065 25.1097 2.69237 25.1722 2.88825C25.2763 3.14665 25.4013 3.40505 25.5013 3.66762L28.5879 10.0735H21.3566V10.0693ZM76.6995 0C72.3299 0 67.877 2.5465 67.877 8.17296C67.877 11.3863 69.4099 13.2826 70.8345 14.3204C72.5549 15.5957 74.7084 16.0042 76.8412 16.0042C81.544 16.0042 85.6429 13.3952 85.6429 8.19797C85.6429 3.00078 81.8148 0.0208388 76.6995 0ZM76.8453 14.1245C74.7293 14.1245 72.5965 13.5869 71.2344 11.9239C70.2388 10.7611 69.9473 9.2274 69.9473 8.03959C69.9473 3.53425 73.4255 1.938 76.4704 1.85465C80.4693 1.74629 83.556 3.9677 83.556 7.97708C83.556 10.5653 82.2522 14.1245 76.8453 14.1245ZM37.6854 1.56291C37.2105 1.99635 36.3816 2.98828 36.3816 4.81792C36.3816 8.46054 39.3432 8.9565 40.3221 9.13154L34.9361 15.5582H37.6479L42.6007 9.47747H49.6612V15.5582H52.0356V0.33342H41.7926C40.5096 0.354259 38.9517 0.375098 37.6895 1.56291H37.6854ZM49.6779 7.6895H42.4465C41.3094 7.6895 39.8556 7.66866 39.0308 6.5267C38.6559 6.03074 38.531 5.44725 38.531 4.90961C38.531 4.32613 38.6768 3.74681 38.9683 3.29252C39.6307 2.19224 40.6845 2.19224 41.6426 2.1714H49.6779V7.6895Z"
                            fill="#484848"
                        />
                    </svg>
                </Link>
            </li>

            <div className="flex justify-end gap-14 items-baseline">
                {data && data.map((el, index) => (
                    index >= data.length - 2 && (
                        <li key={el._key}>
                            {/*Current not work on route settings ony work on /auth/login */}
                            <Link
                                className={`relative leading-none transition group flex items-center justify-center flex-col link ${pathname === `/${el.navItemUrl.linkUrl}` ? 'active opacity-50' : ''}`}
                                href={`/${el.navItemUrl.linkUrl}`}>
                                {el.text}

                                <svg
                                    className={`absolute left-0 right-0 -bottom-3 w-full ${pathname === `/${el.navItemUrl.linkUrl}` ? 'active opacity-50' : 'group-hover:opacity-100 opacity-0 transition'}`}
                                    width="10" height="7"
                                    viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7L0 2L2.5 0H5H7.5L10 2L5 7Z" fill="#484848"/>
                                </svg>

                            </Link>
                        </li>
                    )
                ))}
            </div>
        </ul>
    )
}

export default _list