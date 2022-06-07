import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


// Images and icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// helper functions
import { shortenText } from '../helpers/functions';

// Css style
import styles from "./ProductCard.module.css";
import { ThemeContext } from '../contexts/ThemeContextProvider';

const ProductCard = ({ data }) => {


    const { title, image, price, id } = data;
    const {darkTheme} = useContext(ThemeContext);

    return (
        <div className={`${styles.cardContainer} ${darkTheme ? styles.dark : ""}`}>
            <div>
                <img className={styles.image} src={image} alt={shortenText(title, 2)} />
                <span className={styles.title}>
                    {shortenText(title, 2)}
                </span>
            </div>
            <span className={styles.priceContainer}>
                قیمت: <span className={styles.price}>{price} $</span>
            </span>
            <div className={styles.buttonContainer}>
                <Link className={styles.linkButton} to={`store/${id}`}>جزییات محصول</Link>
            </div>
        </div>
    );
}

export default ProductCard;