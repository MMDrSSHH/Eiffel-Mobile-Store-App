import React from 'react';
import { Link, useReducer } from 'react-router-dom';


// Css styles
import styles from './Signin.module.css';

// Images and icons
import eiffelTowerSVG from "../assets/EiffelTower.svg";



// the values entered by the user will be stored in the state of useReducer
// and then passed to a authentication function.
const Signin = () => {
    return (
        <div className={styles.signinPage}>
            <div className={styles.signinContainer}>
                <div className={styles.imgContainer}>
                    <img src={eiffelTowerSVG} alt="eiffel-tower" />
                </div>
                <form className={styles.form}>
                    <h2 className={styles.formTitle}>حساب بساز</h2>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>ایمیل</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>نام کاربری</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>رمز عبور</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>تکرار رمز عبور</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.signinButton}`}>
                            حساب کاربری بساز
                        </button>
                        <Link to="/login" className={`${styles.signinLink}`}>
                            حساب کاربری داری؟
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;