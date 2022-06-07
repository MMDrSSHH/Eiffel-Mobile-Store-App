import React from 'react';


// Css styles
import styles from './ServiceCard.module.css';

const ServiceCard = ({ serviceData }) => {

    const { title, icon, description } = serviceData;

    return (
        <div className={styles.cardContainer}>
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