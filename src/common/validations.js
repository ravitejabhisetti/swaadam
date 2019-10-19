import * as Constants from './swaadam-constants';

const validateMobileNumber = (number) => {
    const tmpNumber = Number(number);
    const validNum = /^[0-9]+$/.test(tmpNumber);
    if (validNum && number.length === 10) {
        return true;
    } else {
        return false;
    }
}

const validateUpdateDetailsForm = (formValues) => {
    let error = null;
    console.log('form values to check---', formValues);
    if (formValues[0].value === '' || !(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(formValues[0].value))) {
        console.log('name error--', Constants.Name_Error);
        error = Constants.Name_Error;
    }
    if (formValues[1].value === '' || !(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(formValues[1].value))) {
        if (!error) {
            error = Constants.Email_Error;
        }
    }
    return error;
}

const validateUserNumberPresence = (response, mobileNumber) => {
    let userPresence = null;
    for (let key in response) {
        if (response[key].mobileNumber === mobileNumber) {
            userPresence = response[key];
            break;
        }
    }
    return userPresence;
}

export { validateMobileNumber, validateUpdateDetailsForm, validateUserNumberPresence };