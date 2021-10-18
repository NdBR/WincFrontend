// Utility functions
const isNotNull = (str) => { if (str !== "") { return true } else return false }

// const hasRightLength = (str) => str;
const hasRightLength = (str) => { if (str.length < 9) { return true } else return false }

// const hasUpperCaseCharacter = (str) => str;
const hasUpperCaseCharacter = (str) =>
    Array.from(str).some((character) => { return (!/[a-z]/.test(character) && /[A-Z]/.test(str)) === true })

// const hasLowerCaseCharacter = (str) => str;
const hasLowerCaseCharacter = (str) =>
    Array.from(str).some((character) => { return (!/[A-Z]/.test(character) && /[a-z]/.test(str)) === true })

// const hasDigit = (str) => str;
const hasDigit = (str) => Array.from(str).some((character) => (/\d/.test(character)) === true)

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword: verifyPassword,
    isNotNull: isNotNull,
    hasRightLength: hasRightLength,
    hasUpperCaseCharacter: hasUpperCaseCharacter,
    hasLowerCaseCharacter: hasLowerCaseCharacter,
    hasDigit: hasDigit,
    minimumConditionsReached: minimumConditionsReached
}