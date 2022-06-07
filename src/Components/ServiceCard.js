import React, { useContext } from 'react';

// Contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';


// Css styles
import styles from './ServiceCard.module.css';

const ServiceCard = ({ serviceData }) => {

    const { darkTheme } = useContext(ThemeContext);

    const { title, icon, description } = serviceData;

    return (
        <div className={`${styles.cardContainer} ${darkTheme ? styles.dark : ""}`}>
            <span className={styles.icon}>
                {icon}
            </span>
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    )
}

export default ServiceCard;