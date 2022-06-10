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


// Regexp for email validation
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
    } else if (data.password.trim().length < 6) {
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


const passwordQualifier = (password) => {
    
    const fairLength = password.length >= 6 && password.length < 8;
    const goodLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    const characterScore = hasLowerCase + hasUpperCase + hasNumbers
    // console.log("upper case", hasUpperCase);
    // console.log("lower case", hasLowerCase);
    // console.log("number", hasNumbers);
    // if (hasLowerCase + hasUpperCase + hasNumbers  === 1 && !hasEnoughLength) {
    //     return "Weak Password";
    // } else if (hasLowerCase + hasUpperCase + hasNumbers === 2 && hasEnoughLength) {
    //     return "Fair Password";
    // } else if (hasLowerCase + hasUpperCase + hasNumbers === 3 && hasEnoughLength) {
    //     return "Strong Password";
    // }
    if (characterScore === 1 && fairLength) {
        return "Weak Password";
    } else if (characterScore >= 2 && fairLength) {
        return "Fair Password";
    } else if (characterScore === 1 && goodLength) {
        return "Weak Password";
    } else if (characterScore === 2 && goodLength) {
        return "Fair Password";
    } else if (characterScore === 3 && goodLength) {
        return "Strong Password";
    }
    return "";
}

export { shortenText, productQuantityCart, formValidation, passwordQualifier };