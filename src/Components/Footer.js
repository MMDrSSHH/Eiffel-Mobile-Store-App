import React, { useContext } from 'react';


// Css styles
import styles from "./Footer.module.css";

// Images and icons
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

// Contexts
import {ThemeContext} from "../contexts/ThemeContextProvider";



const Footer = () => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <footer className={`${styles.footer} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.footerContainer}>
                <h2 className={styles.heading}>Eiffel Mobile Store and Repairs</h2>
                <div className={styles.contactUsContainer}>
                    <div className={styles.socials}>
                        <span className={styles.contactUsHeading}>با ما در ارتباط باشید.</span>
                        <div className={styles.contactUsIcons}>
                            <InstagramIcon className={`${styles.icon} ${styles.insta}`} sx={{ fontSize: 48 }} />
                            <TelegramIcon className={`${styles.icon} ${styles.tel}`} sx={{ fontSize: 48 }} />
                            <WhatsappOutlinedIcon className={`${styles.icon} ${styles.what}`} sx={{ fontSize: 48 }} />
                        </div>
                    </div>
                    <div className={styles.contactInfos}>
                        <div className={styles.contactInfo}>
                            <span className={styles.label}> مسئول تعمیرات:</span>
                            <p className={styles.info}>09170000000<LocalPhoneOutlinedIcon /></p>
                        </div>
                        <div className={styles.contactInfo}>
                            <span className={styles.label}> مسئول تعمیرات:</span>
                            <p className={styles.info}>09171111111<LocalPhoneOutlinedIcon /></p>
                        </div>
                        <div className={styles.contactInfo}>
                            <span className={styles.label}> مسئول فروش:</span>
                            <p className={styles.info}>09172222222<LocalPhoneOutlinedIcon /></p>
                        </div>
                        <div className={styles.contactInfo}>
                            <span className={styles.label}>آدرس: </span>
                            <p className={styles.info}>فارس،فسا،خیابان امام،پاساژ کوثر،لاین اول،موبایل ایفل<LocationOnOutlinedIcon /></p>
                        </div>
                    </div>
                    <p className={styles.claim}>
                        All rights reserved by Eiffel Mobile Store.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;