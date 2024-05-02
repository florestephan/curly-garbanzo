"use client"

import {usePathname} from "next/navigation";

import {_list} from "@/components/Header/_list";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";
import {useState} from "react";

export function HeaderDesktop({dataHeader}) {

    const pathname = usePathname()
    const {scrollYProgress} = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const previous = scrollYProgress.getPrevious()

        if (latest > previous && latest > 0.2) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 2}}
            className="header-desktop flex items-center justify-between w-full transition delay-150 z-50 px-14 bg-white fixed h-[120px] left-0 right-0">
            <nav className="w-full">
                <_list pathname={pathname} data={dataHeader}/>
            </nav>
        </motion.header>
    )
}