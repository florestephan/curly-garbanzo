import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Link from "next/link";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};


export const MenuItem = ({data}) => {

    const pathname = usePathname()

    return (
        <motion.li
            key={data._key}
            variants={variants}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            <Link href={`/${data.navItemUrl.linkUrl}`}
                  className={`text-placeholder ${pathname === `/${data.navItemUrl.linkUrl}` ? 'active opacity-50' : ''}`}>
                <span className="text">{data.text}</span>
            </Link>
        </motion.li>
    );
};
