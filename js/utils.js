// Utility functions for the validator app

/**
 * Function to check if a value is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
function isValidEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

/**
 * Function to trim whitespace from a string.
 * @param {string} str - The string to trim.
 * @returns {string} - The trimmed string.
 */
function trim(str) {
    return str.trim();
}

/**
 * Function to generate a random identifier.
 * @returns {string} - A random string identifier.
 */
function generateId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}