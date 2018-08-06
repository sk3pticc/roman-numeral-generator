const numeralLookupTable = require('./numeralLookupTable');

class RomanNumeralGenerator {
    generate(startNum) {
        if (startNum < 0 || startNum > 3999) {
            throw new Error('Only numbers 0 - 3999 (inclusive) are supported.')
        }

        let output = '';
        let number = startNum;

        Object.keys(numeralLookupTable).forEach((key) => {
            let currentValue = numeralLookupTable[key];
            while (number >= currentValue) {
                output += key;
                number -= currentValue;
            }
        });

        return output;
    }
};

module.exports = RomanNumeralGenerator;