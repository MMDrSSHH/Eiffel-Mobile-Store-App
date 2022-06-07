import React, { useContext } from 'react';

// Css styles
import styles from './Products.module.css';

// Components
import ProductCard from './ProductCard';

// Contexts
import { ProductContext } from '../contexts/ProductContextProvider'

const Products = () => {

    const products = useContext(ProductContext);
    console.log(products);


    return (
        <div className={styles.productsContainer}>
            {
                products.map(product => <ProductCard key={product.id} data={product} />)
            }
        </div>
    );
}

export default Products;