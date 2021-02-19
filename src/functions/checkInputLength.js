export default function checkInputLength(value) {
    // Trim the value
    var trimmedValue = value.trim();
    // If the value's length is greater than 0 characters, return true
    if (trimmedValue.length > 0) {
        return true;
    }
    else {
        return false;
    }
}