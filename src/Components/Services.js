import React, { useContext } from 'react';

// Css styles
import styles from "./Services.module.css";

// Components
import ServiceCard from './ServiceCard';
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Services = ({ servicesData }) => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`${styles.services} ${darkTheme ? styles.dark : ""}`}>
            {
                servicesData.map(serviceData => <ServiceCard key={serviceData.id} serviceData={serviceData} />)
            }
        </div>
    )
};

export default Services;