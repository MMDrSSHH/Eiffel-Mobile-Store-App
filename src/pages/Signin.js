import React, { useReducer, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import ModalMessage from '../Components/ModalMessage';


// Css styles
import styles from './Signin.module.css';

// Images and icons
import eiffelTowerSVG from "../assets/EiffelTower.svg";
import eiffelTowerDarkSVG from "../assets/EiffelTowerDark.svg";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

// Helper functions
import { formValidation, passwordQualifier } from '../helpers/functions';

// Context
import { ThemeContext } from '../contexts/ThemeContextProvider';


const initialState = {
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
}


// Reducer function for handling the form inputs
const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "EMAIL":
            return {
                ...state,
                email: action.payload,
            }
        case "USERNAME":
            return {
                ...state,
                userName: action.payload,
            }
        case "PASSWORD":
            return {
                ...state,
                password: action.payload,
            }
        case "CONFIRMPASSWORD":
            return {
                ...state,
                confirmPassword: action.payload,
            }
    }
}

// the values entered by the user will be stored in the state of useReducer
// and then passed to a authentication function.
const Signin = ({ history }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({
        email: false,
        userName: false,
        password: false,
        confirmPassword: false,
    });
    const [show, setShow] = useState(false);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        setErrors(formValidation(state, "SIGNIN"));
    }, [state]);

    const touchHandler = (event) => {
        setTouch({
            ...touch,
            [event.target.name]: true,
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setShow(true);
        if (Object.keys(errors).length === 0) {
            setTimeout(() => {
                history.replace("/");
            }, 2000);
        }
    }

    const themeHandler = (event) => {
        event.preventDefault();
        setDarkTheme(!darkTheme);
    }

    return (
        <div className={`${styles.signinPage} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.signinContainer}>
                <div className={styles.imgContainer}>
                    <img src={!darkTheme ? eiffelTowerSVG : eiffelTowerDarkSVG} alt="eiffel-tower" />
                </div>
                <form className={styles.form}>
                    <h2 className={styles.formTitle}>حساب بساز</h2>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>ایمیل</label>
                        <input
                            name='email'
                            type="text"
                            className={styles.inputField}
                            value={state.email}
                            onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
                            onFocus={touchHandler}
                        />
                        {
                            errors.email && touch.email && <span className={styles.error}>{errors.email}</span>
                        }
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>نام کاربری</label>
                        <input
                            name='userName'
                            type="text"
                            className={styles.inputField}
                            value={state.userName}
                            onChange={(e) => dispatch({ type: "USERNAME", payload: e.target.value })}
                            onFocus={touchHandler}
                        />
                        {
                            errors.userName && touch.userName && <span className={styles.error}>{errors.userName}</span>
                        }
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>رمز عبور</label>
                        <input
                            name='password'
                            type="password"
                            className={styles.inputField}
                            value={state.password}
                            onChange={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })}
                            onFocus={touchHandler}
                        />
                        {
                            touch.password &&
                            <>
                                <div
                                    className={`${styles.passwordQualifier}
                                            ${passwordQualifier(state.password) === "Weak Password" ? styles.weak : ""}
                                            ${passwordQualifier(state.password) === "Fair Password" ? styles.fair : ""}
                                            ${passwordQualifier(state.password) === "Strong Password" ? styles.strong : ""}`}
                                >
                                    <div className={styles.qualifierField}></div>
                                    <div className={styles.qualifierField}></div>
                                    <div className={styles.qualifierField}></div>
                                </div>
                                <span className={styles.qualifierText}>
                                    {
                                        passwordQualifier(state.password)
                                    }
                                </span>
                            </>
                        }
                        {
                            errors.password && touch.password && <span className={styles.error}>{errors.password}</span>
                        }
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>تکرار رمز عبور</label>
                        <input
                            name='confirmPassword'
                            type="password"
                            className={styles.inputField}
                            value={state.confirmPassword}
                            onChange={(e) => dispatch({ type: "CONFIRMPASSWORD", payload: e.target.value })}
                            onFocus={touchHandler}
                        />
                        {
                            errors.confirmPassword && touch.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>
                        }
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={submitHandler} className={`${styles.signinButton}`}>
                            حساب کاربری بساز
                        </button>
                        <Link to="/login" className={`${styles.signinLink}`}>
                            حساب کاربری داری؟
                        </Link>
                    </div>
                    <button className={styles.themeToggler} onClick={themeHandler}>
                        {!darkTheme ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </button>
                </form>
            </div>
            {
                Object.keys(errors).length === 0 ?
                    <ModalMessage setShow={setShow} show={show} Success={true} message="با موفقیت ثبت‌نام کردی!" /> :
                    <ModalMessage setShow={setShow} show={show} Success={false} message="اطلاعاتت صحیح نیستن!" />
            }
        </div>
    );
}

export default Signin;