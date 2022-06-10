import React, { useReducer, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';


// Css styles
import styles from "./Login.module.css";

// Images and icons
import eiffelTowerSVG from "../assets/EiffelTower.svg";
import eiffelTowerDarkSVG from "../assets/EiffelTowerDark.svg";
import { formValidation } from '../helpers/functions';
import ModalMessage from '../Components/ModalMessage';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

// Contexts
import { ThemeContext } from '../contexts/ThemeContextProvider';



const initialState = {
    userName: '',
    password: '',
};

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'USERNAME':
            return {
                ...state,
                userName: action.payload,
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload,
            }
    }
}
// the values entered by the user will be stored in the state of useReducer
// and then passed to a authentication function.
const Login = ({ history }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({
        userName: false,
        password: false,
    });
    const [show, setShow] = useState(false);
    const { darkTheme, themeHandler } = useContext(ThemeContext);

    useEffect(() => {
        setErrors(formValidation(state, "LOGIN"));
    }, [state]);

    const focusHandler = (event) => {
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

    const themeButtonHandler = (event) => {
        event.preventDefault();
        themeHandler(!darkTheme);
    }

    return (
        <div className={`${styles.loginPage} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.loginContainer}>
                <div className={styles.imgContainer}>
                    <img src={!darkTheme ? eiffelTowerSVG : eiffelTowerDarkSVG} alt="eiffel-tower" />
                </div>
                <form className={styles.form}>
                    <h2 className={styles.formTitle}>وارد شو</h2>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>نام کاربری</label>
                        <input
                            type="text"
                            value={state.userName}
                            className={styles.inputField}
                            name="userName"
                            onChange={(e) => dispatch({ type: "USERNAME", payload: e.target.value })}
                            onFocus={focusHandler}
                        />
                        {
                            errors.userName && touch.userName && <span className={styles.error}>{errors.userName}</span>
                        }
                    </div>
                    <div className={styles.fieldContainer}>
                        <label className={styles.inputLabel}>رمز عبور</label>
                        <input
                            type="password"
                            value={state.password}
                            className={styles.inputField}
                            name="password"
                            onChange={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })}
                            onFocus={focusHandler}
                        />
                        {
                            errors.password && touch.password && <span className={styles.error}>{errors.password}</span>
                        }
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={submitHandler} className={`${styles.loginButton}`}>
                            وارد شو
                        </button>
                        <Link to="/signin" className={`${styles.signupLink}`}>
                            هنوز حساب کاربری نداری؟
                        </Link>
                    </div>
                    <button className={styles.themeToggler} onClick={themeButtonHandler}>
                        {!darkTheme ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </button>
                </form>
            </div>
            {
                Object.keys(errors).length === 0 ?
                    <ModalMessage setShow={setShow} show={show} Success={true} message="با موفقیت وارد شدی!" /> :
                    <ModalMessage setShow={setShow} show={show} Success={false} message="اطلاعاتت صحیح نیستن!" />
            }
        </div>
    );
}

export default Login;