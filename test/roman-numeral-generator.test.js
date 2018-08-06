const RomanNumeralGenerator = require('../src/roman-numeral-generator');

const inputOutputMappings = {
    0: '',
    1: 'I',
    4: 'IV',
    15: 'XV',
    165: 'CLXV',
    823: 'DCCCXXIII',
    1800: 'MDCCC',
    3999: 'MMMCMXCIX'
};

describe("Roman Numeral Generator", () => {
    let romanNumeralGenerator;

    beforeAll(() => {
        romanNumeralGenerator = new RomanNumeralGenerator();
    });

    describe('With valid data', () => {
        test('Should return some output when provided with a number', () => {
            const output = romanNumeralGenerator.generate(1);
            expect(output).toBeDefined();
        });
    
        test('Should generate the correct roman numeral for provided value', () => {
            Object.keys(inputOutputMappings).forEach((key) => {
                const output = romanNumeralGenerator.generate(key);
                expect(output).toEqual(inputOutputMappings[key]);
            });
        });
    });

    describe('With invalid data', () => {
        const expectedErrorMessage = 'Only numbers 0 - 3999 (inclusive) are supported.'

        test('Should throw an error if a number less than 0 is provided', () => {
            try {
                romanNumeralGenerator.generate(-1);
            } catch(e) {
                expect(e).toBeDefined();
                expect(e.message).toEqual(expectedErrorMessage);
            }
        });

        test('Should throw an error if a number greater than 3999 is provided', () => {
            try {
                romanNumeralGenerator.generate(4000);
            } catch(e) {
                expect(e).toBeDefined();
                expect(e.message).toEqual(expectedErrorMessage);
            }
        });
    });
});