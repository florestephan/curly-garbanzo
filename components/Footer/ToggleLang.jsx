"use client"

import {useState} from "react";

const ToggleLang = () => {

    const [activeLanguage, setActiveLanguage] = useState('FR')

    return (
        <>
            <div className="bg-GreyM rounded-3xl h-[50px] w-24 flex items-center justify-center p-1">
                <span
                    className={`inline-flex items-center justify-center w-11 h-11 cursor-pointer rounded-full text-Black ${activeLanguage === "FR" ? 'bg-white' : 'bg-GreyM'}`}
                    onClick={() => setActiveLanguage('FR')}>Fr
                </span>
                <span
                    className={`inline-flex items-center justify-center w-11 h-11 cursor-pointer rounded-full text-Black ${activeLanguage === "EN" ? 'bg-white' : 'bg-GreyM'}`}
                    onClick={() => setActiveLanguage('EN')}>En
                </span>
            </div>
        </>
    )
}

export default ToggleLang