import Image from "next/image";
import {urlForImage} from "@/sanity/lib/image";
import {useState} from "react";
import Modale from "@/components/FilterIndexPage/ModaleContent";

const ProductList = ({products, className}) => {
    const [showModal, setShowModale] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setShowModale(true);
    };

    const handleCloseModal = () => {
        setShowModale(false);
        setSelectedProduct(null);
    };

    return (
        <>
            {products.map((product) => (
                <div onClick={() => handleOpenModal(product)} className={`${className} flex flex-col justify-between`}
                     key={product._id}>
                    <p className="text-center">{product.title}</p>
                    {product.image && (
                        <Image className="-z-10" fill={true} src={urlForImage(product?.image?.asset._ref)}
                               alt={product.title}/>
                    )}
                    <div>
                        <p className="text-center">{product.collection}</p>
                        <p className="text-center text-12">Ref : {product.larefe}</p>
                    </div>
                </div>
            ))}

            <Modale show={showModal} onClose={handleCloseModal} product={selectedProduct}/>
        </>
    );
};

export default ProductList;

// <p>Type: {product.type}</p>
// <p>Stone: {product.stone}</p>
// <p>Price: ${product.price}</p>
// <p>{product.description}</p>