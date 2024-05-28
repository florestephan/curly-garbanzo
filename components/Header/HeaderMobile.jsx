"use client"

import {useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion, useMotionValueEvent, useScroll, useCycle} from "framer-motion";
import {MenuToggleMobile} from "@/components/Header/MenuToggleMobile";
import {Navigation} from "@/components/Header/Nav";


const HeaderMobile = ({dataHeader}) => {

    const {scrollYProgress} = useScroll()
    const [hidden, setHidden] = useState(false)
    const [isOpen, toggleOpen] = useCycle(false, true);


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const previous = scrollYProgress.getPrevious()

        if (latest > previous && latest > 0.2) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 40px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };


    return (
        <motion.header
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 2}}
            className="header-desktop flex items-center justify-between w-full transition delay-150 z-50 px-14 bg-white fixed h-[120px] left-0 right-0 mobile:px-4">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom="100%"
                className="flex items-center justify-center flex-row-reverse z-50"
            >
                <motion.div
                    className="navbar absolute top-5 left-0 bottom-0 min-h-svh w-72 bg-white"
                    variants={sidebar}/>
                <Navigation stateMenu={isOpen} data={dataHeader}/>
                <MenuToggleMobile toggle={() => toggleOpen()}/>
            </motion.nav>

            <Link href="/">
                <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="16"
                    fill="none"
                    viewBox="0 0 86 16"
                >
                    <path
                        fill="#484848"
                        d="M66.257 4.822c0-1.834-.834-2.826-1.304-3.255C63.686.38 62.133.358 60.85.337h-6.011v1.834h6.157c.953.021 2.011.021 2.674 1.122.291.454.437 1.033.437 1.617 0 .541-.125 1.12-.5 1.617-.824 1.142-2.278 1.162-3.415 1.162h-5.349v1.793h5.203l4.953 6.08h2.711l-5.386-6.426c.975-.175 3.937-.671 3.937-4.314h-.004zM12.82 7.46c.042 0 .58-.258.725-.346.663-.429 1.325-1.292 1.325-2.78 0-.625-.104-1.508-.725-2.35C12.967.434 10.956.367 9.381.367H0v15.225h9.38c1.575 0 3.583 0 4.908-1.163.87-.755 1.303-1.9 1.303-3.084 0-2.91-2.132-3.664-2.774-3.88l.004-.005zM2.071 2.134H9.36c.766 0 1.679 0 2.403.475.517.367.954.971.954 1.875 0 .734-.312 1.576-1.037 1.984-.579.346-1.329.346-1.97.346H2.07v-4.68zM12.654 13.09c-.787.692-1.783.733-2.654.733h-7.93v-5.26H10c.85 0 1.825.022 2.57.626.167.15.871.713.871 1.984 0 .325-.02 1.23-.787 1.921v-.004zM23.948.346l-7.56 15.246h2.32l1.778-3.751h8.99l1.778 3.75h2.382L26.143.347h-2.195zm-2.591 9.723l3.09-6.318c.125-.283.246-.542.35-.821.084-.217.146-.434.209-.625.041.196.104.387.166.583.104.259.23.517.33.78l3.086 6.405h-7.231v-.004zM76.7 0c-4.37 0-8.823 2.546-8.823 8.173 0 3.213 1.533 5.11 2.958 6.147 1.72 1.276 3.873 1.684 6.006 1.684 4.703 0 8.802-2.609 8.802-7.806S81.815.021 76.699 0zm.145 14.124c-2.116 0-4.248-.537-5.61-2.2-.996-1.163-1.288-2.697-1.288-3.884 0-4.506 3.478-6.102 6.523-6.185 4-.109 7.086 2.113 7.086 6.122 0 2.588-1.304 6.147-6.71 6.147zM37.685 1.563c-.474.433-1.303 1.425-1.303 3.255 0 3.643 2.961 4.139 3.94 4.314l-5.386 6.426h2.712l4.953-6.08h7.06v6.08h2.375V.333H41.793c-1.283.021-2.841.042-4.103 1.23h-.005zM49.678 7.69h-7.231c-1.138 0-2.591-.021-3.416-1.163-.375-.496-.5-1.08-.5-1.617 0-.584.146-1.163.437-1.617.663-1.1 1.716-1.1 2.675-1.122h8.035V7.69z"
                    ></path>
                </svg>

            </Link>

            <Link
                href="/auth/login"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="#484848"
                        fillRule="evenodd"
                        d="M10 19c2.143 0 4.112-.75 5.657-2A8.962 8.962 0 0010 15c-2.143 0-4.112.75-5.657 2A8.962 8.962 0 0010 19zm0-5a9.96 9.96 0 016.406 2.321 9 9 0 10-12.813 0A9.96 9.96 0 0110 14zm10-4a9.968 9.968 0 01-2.858 7A9.96 9.96 0 0110 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10zm-6-2.5a4 4 0 11-8 0 4 4 0 018 0zm1 0a5 5 0 11-10 0 5 5 0 0110 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>

        </motion.header>
    )

}

export default HeaderMobile
