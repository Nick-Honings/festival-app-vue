import { mount } from '@vue/test-utils';
import validator from '../../src/validators/general'
import emailAddresses from "./emailAddresses";

describe('isNullOrEmpty', () => {
    test('should pass', () => {
        let input = 'testBlock';

        expect(validator.isNullOrEmpty(input)).toBeFalsy();
    });

    test('should not pass if null', () => {
        let input = null;

        expect(validator.isNullOrEmpty(input)).toBeTruthy();
    });

    test('should not pass if blankspace', () => {
        let input = ' ';

        expect(validator.isNullOrEmpty(input)).toBeTruthy();
    });

    test('should not pass if none', () => {
        let input = '';

        expect(validator.isNullOrEmpty(input)).toBeTruthy();
    });
});

describe('isValidPassword', () => {
    test('should pass', () => {
        let input = 'Ab12345';

        expect(validator.isValidPassword(input)).toBeTruthy();
    });

    test('misses uppercase', () => {
        let input = 'ab12345';

        expect(validator.isValidPassword(input)).toBeFalsy();
    });

    test('misses lowercase', () => {
        let input = 'AB12345';

        expect(validator.isValidPassword(input)).toBeFalsy();
    });

    test('misses numbers', () => {
        let input = 'abcdef';

        expect(validator.isValidPassword(input)).toBeFalsy();
    });

    test('not 6 characters', () => {
        let input = 'aB123';

        expect(validator.isValidPassword(input)).toBeFalsy();
    });

    test('over 20 characters', () => {
        let input = 'ab12345Dieb#%Rvnew934w9f439t';

        expect(validator.isValidPassword(input)).toBeFalsy();
    });
});

describe('isValidModel', () => {
    test('should pass', () => {
        let input = { a: true, b: true, c: true };

        expect(validator.isValidModel(input)).toBeTruthy();
    });

    test('should not pass if false', () => {
        let input = { a: true, b: true, c: false};

        expect(validator.isValidModel(input)).toBeFalsy();
    });

    test('should not pass if null', () => {
        let input = { a: true, b: true, c: null};

        expect(validator.isValidModel(input)).toBeFalsy();
    });

    test('should not pass if undefined', () => {
        let input = { a: true, b: true, c: undefined};

        expect(validator.isValidModel(input)).toBeFalsy();
    });

    test('should not pass if else', () => {
        let input = { a: true, b: true, c: 1};

        expect(validator.isValidModel(input)).toBeFalsy();
    })
});

describe('isValidEmail', () => {
    test('valid', () => {
        let input = emailAddresses.getValidEmail();

        for (let i = 0; i < input.length; i++){
            expect(validator.isValidEmail(input[i])).toBeTruthy()
        }
    });

    test('strange valid', () => {
        let input = emailAddresses.getStrangelyValidEmail()

        for (let i = 0; i < input.length; i++){
            expect(validator.isValidEmail(input[i])).toBeTruthy()
        }
    });

    test('invalid', () => {
        let input = emailAddresses.getInvalidEmail()

        for (let i = 0; i < input.length; i++){
            expect(validator.isValidEmail(input[i])).toBeFalsy()
        }
    });

    test('strange invalid', () => {
        let input = emailAddresses.getInvalidEmail()

        for (let i = 0; i < input.length; i++){
            expect(validator.isValidEmail(input[i])).toBeFalsy()
        }
    });
})
