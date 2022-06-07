import React from 'react';

// Css styles
import styles from "./Services.module.css";

// Components
import ServiceCard from './ServiceCard';

const Services = ({ servicesData }) => {
    return (
        <div className={styles.services}>
            {
                servicesData.map(serviceData => <ServiceCard key={serviceData.id} serviceData={serviceData} />)
            }
        </div>
    )
};

export default Services;