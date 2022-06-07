import React, { createContext, useEffect, useState } from 'react';


// API services
import { getProducts } from '../services/api';


export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setProduct(await getProducts());
    }

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;