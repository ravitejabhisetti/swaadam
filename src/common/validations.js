const validateMobileNumber = (number) => {
    const tmpNumber = Number(number);
    const validNum = /^[0-9]+$/.test(tmpNumber);
    if (validNum && number.length === 10) {
        return true;
    } else {
        return false;
    }
}

export default validateMobileNumber;