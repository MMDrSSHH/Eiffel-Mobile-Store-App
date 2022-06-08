import React, { useReducer } from 'react';


// Css styles
import styles from "./Login.module.css";

// Images and icons
import eiffelTowerSVG from "../assets/EiffelTower.svg";

// the values entered by the user will be stored in the state of useReducer
// and then passed to a authentication function.
const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.imgContainer}>
                    <img src={eiffelTowerSVG} alt="eiffel-tower" />
                </div>
                <form className={styles.form}>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>نام کاربری</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>رمز عبور</label>
                        <input type="text" className={styles.inputField} />
                    </div>
                    <button>
                        وارد شو
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;