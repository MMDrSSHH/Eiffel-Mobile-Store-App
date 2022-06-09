// Shortens the text to the specified word count
const shortenText = (text, words) => {
    const splittedtext = text.split(" ");
    const shorten = splittedtext.slice(0, words).join(" ");
    return shorten;
}


// Gets items data and the specified id
// returns the item quantity of the item with the specified id
const productQuantityCart = (items, id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        return items[index].quantity;
    } else {
        return 0;
    }
}



const emailRegex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

// Validates the input entered by the user
const formValidation = (data, type) => {
    const errors = {};


    if (!data.userName.trim()) {
        errors.userName = "نام کاربری وارد نکردی!";
    } else if (data.userName.trim().length < 5) {
        errors.userName = "نام کاربری کوتاهی انتخاب کردی!";
    } else {
        delete errors.userName;
    }

    if (!data.password.trim()) {
        errors.password = "رمز عبور وارد نکردی!";
    } else if (data.password.trim().length < 8) {
        errors.password = "رمز عبور کوتاهی انتحاب کردی!";
    } else {
        delete errors.password;
    }

    if (type === "SIGNIN") {
        if (!data.email.trim().length) {
            errors.email = "ایمیل خودت رو وارد کن!";
        } else if (!emailRegex.test(data.email.trim())) {
            errors.email = "ایمیل قابل قبول وارد کن!";
        } else {
            delete errors.email;
        }

        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = "تکرار رمز عبور رو وارد کن!"
        } else if (data.confirmPassword.trim() !== data.password.trim()) {
            errors.confirmPassword = "رمز یکسان وارد کن!";
        } else {
            delete errors.confirmPassword;
        }
    }

    return errors;
}

export { shortenText, productQuantityCart, formValidation };