const Psswdmodule = require('./psswdChecker.js')

// test not null
describe("check is not null psswd", () => {

    test('Should not be null', () => {
        expect(Psswdmodule.isNotNull("")).toBeFalsy()
    });
    test('Should not be null', () => {
        expect(Psswdmodule.isNotNull("Henkie!@#%^^$")).toBeTruthy();
    });
})

// Less than 9 Characters
describe("length password", () => {

    test('Psswd should be less then 9 Characters', () => {
        expect(Psswdmodule.hasRightLength("henkie1")).toBeTruthy()
    })
    test('Psswd should be less then 9 Characters', () => {
        expect(Psswdmodule.hasRightLength("henkie1234")).toBeFalsy()
    })

    test('Psswd should be less then 9 Characters', () => {
        expect(Psswdmodule.hasRightLength("henkie123")).toBeFalsy()
    })
    test('Psswd should be less then 9 Characters', () => {
        expect(Psswdmodule.hasRightLength("")).toBeTruthy()
    })
});

// check uppercase
describe("check uppercase character psswd", () => {

    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasUpperCaseCharacter("henkie5")).toBeFalsy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasUpperCaseCharacter("henKie1234")).toBeTruthy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasUpperCaseCharacter("HENKIE12")).toBeTruthy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasUpperCaseCharacter("")).toBeFalsy()
    })
});

// check lowercase 
describe("check lowerCase character psswd", () => {

    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasLowerCaseCharacter("henkie5")).toBeTruthy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasLowerCaseCharacter("henKie1234")).toBeTruthy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasLowerCaseCharacter("HENKIE12")).toBeFalsy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasLowerCaseCharacter("234#$%")).toBeFalsy()
    })
    test('Psswd should have at least 1 uppercase character', () => {
        expect(Psswdmodule.hasLowerCaseCharacter("")).toBeFalsy()
    })
});

// check digit
describe("check if passwd had digit", () => {

    test('check if passwd had digit', () => {
        expect(Psswdmodule.hasDigit("Henkie1234")).toBeTruthy()
    })
    test('check if passwd had digit', () => {
        expect(Psswdmodule.hasDigit("Henkie@#$%^^")).toBeFalsy()
    })
    test('check if passwd had digit', () => {
        expect(Psswdmodule.hasDigit("")).toBeFalsy()
    })
    test('check if passwd had digit', () => {
        expect(Psswdmodule.hasDigit("1525")).toBeTruthy()
    })
});

// check minimumConditionsReached
describe("check if passwd meets min 3 conditions", () => {

    test('check if passwd meets 3 differ coditions', () => {
        expect(Psswdmodule.minimumConditionsReached([true, true, true, false, false])).toBeTruthy()
    })
    test('check if passwd meets 3 differ coditions', () => {
        expect(Psswdmodule.minimumConditionsReached([true, true, true])).toBeTruthy()
    })
    test('check if passwd meets 3 differ coditions', () => {
        expect(Psswdmodule.minimumConditionsReached([true, true, false, false])).toBeFalsy()
    })
    test('check if passwd meets 3 differ coditions', () => {
        expect(Psswdmodule.minimumConditionsReached([false, false, false, false, false])).toBeFalsy()
    })

});

// check psswdchecker
describe("check if passwd meets 3 conditions and always has one or multiple lowerCase Characters", () => {

    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("")).toBeFalsy()
    })
    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("11Ab")).toBeTruthy()
    })
    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("bbbbbbbbb")).toBeFalsy()
    })
    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("bbbb")).toBeTruthy()
    })
    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("S")).toBeFalsy()
    })
    test('check if passwd meets 3 differ conditions and 1 set condition', () => {
        expect(Psswdmodule.verifyPassword("1234")).toBeFalsy()
    })

});