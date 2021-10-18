console.log("test: Working file JS")
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
    console.log(conditions)
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};




console.log(verifyPassword("HENKIE"))
console.log(verifyPassword(""))
console.log(verifyPassword("Henkie12"))
console.log(verifyPassword("12334"))
console.log(verifyPassword("123HTf"))
console.log(verifyPassword("12HGg4"))