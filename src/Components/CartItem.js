import React, { useContext } from 'react';

// Helpers
import { shortenText } from '../helpers/functions';

// Images and icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Css Styles
import styles from "./CartItem.module.css";

// Contexts
import { ThemeContext } from "../contexts/ThemeContextProvider";


const CartItem = ({ item, dispatch }) => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`${styles.cartItemContainer} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.imageContainer}>
                <img src={item.image} alt="product" />
            </div>
            <div className={styles.textContainer}>
                <h4 className={styles.title}>{shortenText(item.title, 2)}</h4>
                <span className={styles.priceContainer}>قیمت:<span className={styles.price}>{(item.price * item.quantity).toFixed(2)}</span></span>
            </div>
            <div className={styles.buttonContainer}>
                <button className={`${styles.smallButton} ${styles.incButton}`} onClick={() => dispatch({ type: "INCREASE_ITEM", payload: item })}>
                    <AddIcon />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                {
                    item.quantity === 1 &&
                    <>
                        <button className={`${styles.smallButton} ${styles.rmvButton}`} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>
                            <DeleteOutlinedIcon />
                        </button>
                    </>
                }
                {
                    item.quantity > 1 &&
                    <>
                        <button className={`${styles.smallButton} ${styles.decButton}`} onClick={() => dispatch({ type: "DECREASE_ITEM", payload: item })}>
                            <RemoveIcon />
                        </button>
                    </>
                }
            </div>
        </div>
    );
}

export default CartItem;