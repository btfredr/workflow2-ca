export default function checkInputLengthMessage(value) {
    // trim the value
    var trimmedValue = value.trim();
    // if the value's length is equal or greater than 10 characters, return true
    if (trimmedValue.length >= 10) {
        return true;
    }
    else {
        return false;
    }
}