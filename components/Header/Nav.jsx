import {motion} from "framer-motion";
import {MenuItem} from "./Items";

const variants = {
    open: {
        // background: "white",
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

export const Navigation = ({data, stateMenu}) => {

    return (
        <motion.ul
            className={`absolute left-0 top-20 h-80 p-10 flex flex-col gap-y-5 ${stateMenu ? "pointer-events-auto" : "pointer-events-none"}`}
            variants={variants}>
            {data.map((item) => (
                <MenuItem key={item._key} data={item}/>
            ))}
        </motion.ul>
    )

}
