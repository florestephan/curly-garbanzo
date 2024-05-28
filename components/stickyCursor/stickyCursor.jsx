"use client"

import {motion, useMotionValue, useSpring} from "framer-motion";
import {useEffect} from "react";

const StickyCursor = () => {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }


    const lerpOption = {damping: 100, stiffness: 300}

    const lerMouse = {
        x: useSpring(mouse.x, lerpOption),
        y: useSpring(mouse.y, lerpOption)
    }

    const manageMouseMove = (e) => {
        const {clientX, clientY} = e
        mouse.x.set(clientX + 20)
        mouse.y.set(clientY + 20)
    }


    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, []);

    return (
        <>
            <motion.svg
                style={{left: lerMouse.x, top: lerMouse.y, rotate: lerMouse.y}}
                className="fixed z-50"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                fill="none"
                viewBox="0 0 20 14"
            >
                <path fill="#fff" d="M10 14L0 4l5-4h10l5 4-10 10z"></path>
            </motion.svg>
        </>
    )
}

export default StickyCursor