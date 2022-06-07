import React, { useContext, useEffect, useState } from 'react';


// Components
import ProductCard from './ProductCard';

// Context
import { ProductContext } from '../contexts/ProductContextProvider';

// Css styles
import styles from "./ShopShowCase.module.css";
import { ThemeContext } from '../contexts/ThemeContextProvider';

const ShopShowCase = () => {
    const products = useContext(ProductContext);
    const { darkTheme } = useContext(ThemeContext);
    return (
        <section className={`${styles.shopShowCase} ${darkTheme ? styles.dark : ""}`}>
            <h3 className={styles.shopShowCaseTitle}>برترین ها</h3>
            <div className={styles.shopShowCaseProducts}>
                {
                    products.sort((p1, p2) => p2.rating.rate - p1.rating.rate).slice(0, 6).map(product => <ProductCard key={product.id} data={product} />)
                }
            </div>
        </section>
    );
}

export default ShopShowCase;