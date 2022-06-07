import React, { useEffect, useState, useContext } from 'react';

// Context
import { ProductContext } from '../contexts/ProductContextProvider';
import { CartContext } from '../contexts/CartContextProvider';
import { ThemeContext } from '../contexts/ThemeContextProvider';

// Css styles
import styles from "./ProductDetails.module.css";
import { productQuantityCart } from '../helpers/functions';

// Images and icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const ProductDetails = ({ match }) => {

    const [product, setProduct] = useState({});
    const { id } = match.params;

    const products = useContext(ProductContext);
    const { state, dispatch } = useContext(CartContext);
    const {darkTheme} = useContext(ThemeContext);

    useEffect(() => {
        if (products.length > 0) {
            setProduct(products.find(product => product.id === parseInt(id)));
        }
    }, [products]);


    const { image, title, description, price } = product;

    return (
        <div className={`${styles.container} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.imgContainer}>
                <img src={image} alt="product" />
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>{description}</p>
                <div>
                    <span className={styles.priceContainer}>قیمت: <span className={styles.price}>{price} $</span></span>
                    <div className={styles.buttons}>
                        {
                            productQuantityCart(state.items, parseInt(id)) === 0 ?
                                <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} className={styles.addButton}>
                                    افزودن به سبد خرید
                                </button> :
                                <>
                                    <button className={`${styles.smallButton} ${styles.incButton}`} onClick={() => dispatch({ type: "INCREASE_ITEM", payload: product })}>
                                        <AddIcon />
                                    </button>
                                    <span className={styles.quantity}>{productQuantityCart(state.items, parseInt(id))}</span>
                                </>
                        }
                        {
                            productQuantityCart(state.items, parseInt(id)) === 1 &&
                            <>

                                <button className={`${styles.smallButton} ${styles.rmvButton}`} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>
                                    <DeleteOutlinedIcon />
                                </button>
                            </>
                        }
                        {
                            productQuantityCart(state.items, parseInt(id)) > 1 &&
                            <>
                                <button className={`${styles.smallButton} ${styles.decButton}`} onClick={() => dispatch({ type: "DECREASE_ITEM", payload: product })}>
                                    <RemoveIcon />
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;