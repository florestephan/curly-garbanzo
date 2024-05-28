import {createPortal} from "react-dom";
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


const Modale = ({show, onClose, product}) => {

    const [showPrice, setShowPrice] = useState(false)

    if (!show) return null;

    console.log(product)

    return createPortal(
        <div className="fixed z-10 inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <div className="grid grid-cols-8 gap-10 bg-GreyM p-8 w-3/4 relative">
                <button onClick={onClose} className="absolute top-3.5 right-3.5">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" fill="white"/>
                        <path d="M22 23L29.5 30.5M29.5 30.5L37 38M29.5 30.5L37 23M29.5 30.5L22 38" stroke="black"/>
                    </svg>
                </button>
                {product && (
                    <>
                        <h2 className="col-span-8 text-34 uppercase text-Black">Collection : {product.collection}</h2>
                        {product.image && (
                            <Image className="col-span-3 object-cover w-full" width={333} height={333}
                                   src={urlForImage(product?.image?.asset._ref)} alt={product.title}/>
                        )}

                        <div className="col-start-5 col-end-9 text-Black">
                            <p className={`text-20 transition ${showPrice ? "text-GreyP" : "text-Black"}`}
                               onClick={() => setShowPrice(!showPrice)}>
                                Référence : {product.larefe}

                                <AnimatePresence>
                                    {showPrice && (
                                        <motion.span className="text-Black" initial={{opacity: 0}}
                                                     animate={{opacity: 1}}
                                                     exit={{opacity: 0}}> {product.price} € HT
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                            </p>
                            <br/>
                            {product.title && (
                                <p className=""><span className="text-GreyP">Nom</span> {product.title}</p>
                            )}

                            {product.type && (
                                <p className="mt-2"><span className="text-GreyP">Type de bijoux</span> {product.type}
                                </p>
                            )}

                            <div className="mt-10">
                                <p className="text-20">{product?.keyvalueoption?.title}</p>
                                {product.keyvalueoption?.entryone && (
                                    <p className="mt-2"><span
                                        className="text-GreyP">{product?.keyvalueoption?.entryone}</span> {product?.keyvalueoption?.optionone}
                                    </p>
                                )}
                                {product.keyvalueoption?.entrytwo && (
                                    <p className="mt-2"><span
                                        className="text-GreyP">{product?.keyvalueoption?.entrytwo}</span> {product?.keyvalueoption?.optiontwo}
                                    </p>
                                )}
                                {product.keyvalueoption?.entrythree && (
                                    <p className="mt-2"><span
                                        className="text-GreyP">{product?.keyvalueoption?.entrythree}</span> {product?.keyvalueoption?.optionthree}
                                    </p>
                                )}
                                {product.keyvalueoption?.entryfour && (
                                    <p className="mt-2"><span
                                        className="text-GreyP">{product?.keyvalueoption?.entryfour}</span> {product?.keyvalueoption?.optionfour}
                                    </p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Modale