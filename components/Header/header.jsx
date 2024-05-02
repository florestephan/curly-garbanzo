"use client"

import {HeaderDesktop} from "@/components/Header/HeaderDesktop";
import HeaderMobile from "@/components/Header/HeaderMobile";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const Header = ({dataHeader}) => {

    const isMobile = useMediaQuery('(max-width: 1000px)')
    const isDesktop = useMediaQuery('(min-width: 1000px)')

    return (
        <>
            {isMobile && (
                <HeaderMobile dataHeader={dataHeader}/>
            )}

            {isDesktop && (
                <HeaderDesktop dataHeader={dataHeader}/>
            )}

        </>
    )

}

export default Header