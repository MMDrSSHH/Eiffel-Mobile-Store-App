import React, { useEffect, useState, useContext } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';

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
    const { darkTheme } = useContext(ThemeContext);

    // This useEffect will render everytime when new data has been provided through context
    useEffect(() => {
        if (products.length > 0) {
            setProduct(products.find(product => product.id === parseInt(id)));
        }
    }, [products]);


    const { image, title, description, price } = product;

    return (
        <div className={`${styles.container} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.imgContainer}>
                {
                    products.length ?
                        <img src={image} alt="product" /> :
                        <Placeholder className={styles.textPlaceholder} style={{ width: "100%", height: "100%", }} />
                }
            </div>
            <div className={styles.infoContainer}>
                {
                    products.length ?
                        <h2 className={styles.title}>
                            {title}
                        </h2> :
                        <Placeholder animation="wave">
                            <Placeholder className={styles.textPlaceholder} xs={12} style={{ padding: "20px" }} />
                        </Placeholder>
                }
                {
                    products.length ?
                        <p className={styles.description}>{description}</p> :
                        <Placeholder animation="wave" style={{ textAlign: "left" }}>
                            <Placeholder className={styles.textPlaceholder} xs={6} /> <Placeholder className={styles.textPlaceholder} xs={3} />
                            <Placeholder className={styles.textPlaceholder} xs={5} /> {" "} <Placeholder className={styles.textPlaceholder} xs={2} />
                            <br />
                            <Placeholder className={styles.textPlaceholder} xs={4} />
                        </Placeholder>
                }
                <div>
                    <span className={styles.priceContainer}>
                        {
                            products.length ?
                                <>
                                    قیمت:
                                    <span className={styles.price}>
                                        {price} $
                                    </span>
                                </> :
                                <Placeholder animation="wave" style={{ display: "block" }}>
                                    <Placeholder
                                        className={`${styles.textPlaceholder} ${styles.priceTitle}`}
                                        style={{ width: "40px", padding: "5px" }}
                                    /> 
                                    {" "}
                                    <Placeholder
                                        className={`${styles.textPlaceholder} ${styles.pricePlaceholder}`}
                                        style={{ width: "50px", padding: "13px 0" }}
                                    />
                                </Placeholder>
                        }
                    </span>
                    <div className={styles.buttons}>
                        {
                            productQuantityCart(state.items, parseInt(id)) === 0 ?
                                // If the data has yet to be loaded this code will 
                                //make a placeholder for the button in state of loading data
                                (products.length ?
                                    <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} className={styles.addButton}>
                                        افزودن به سبد خرید
                                    </button> :
                                    <Placeholder.Button className={styles.buttonPlaceholder} xs={12} />
                                ) :
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