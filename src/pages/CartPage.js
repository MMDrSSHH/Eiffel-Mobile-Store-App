import React, { useContext } from 'react';

// Context
import { CartContext } from '../contexts/CartContextProvider';
import { ThemeContext } from "../contexts/ThemeContextProvider";

// Components
import CartItem from '../Components/CartItem';

// Css styles
import styles from "./CartPage.module.css";

const CartPage = () => {

    const { state, dispatch } = useContext(CartContext);
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`${styles.cartPage} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.checkoutContainer}>
                <div className={styles.checkout}>
                    <h2 className={styles.title}>تسویه حساب</h2>
                    <span className={styles.totall}>تعداد کل کالا: <span>{state.totallItems}</span></span>
                    <span className={styles.totall}>مجموع قیمت: <span>{state.totallPrice.toFixed(2)}</span></span>
                    <div className={styles.buttonsContainer}>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })} className={styles.checkoutButton}>تسویه</button>
                        <button onClick={() => dispatch({ type: "CLEAR" })} className={styles.clearButton}>حذف سبد خرید</button>
                    </div>
                </div>
            </div>
            <div className={styles.carts}>
                {
                    state.items.map(item => <CartItem key={item.id} item={item} dispatch={dispatch} />)
                }
            </div>
        </div>
    );
}

export default CartPage;