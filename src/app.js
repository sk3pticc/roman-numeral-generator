const prompt = require('prompt');
const RomanNumeralGenerator = require('./roman-numeral-generator');

// Entry point for the program.
const romanNumeralGenerator = new RomanNumeralGenerator();

const start = () => {
    prompt.start();
    console.log(`Please enter the number you\'d like to convert to roman numerals. 0 - 3999 (inclusive) are the only numbers we support. Type 'exit' to stop the program.`)
    prompt.get(['input'], (err, result) => {
        const { input } = result;

        if (input === 'exit') {
            process.exit(0);
        }

        if (number = parseInt(input)) {
            try {
                console.log(`\nThe number ${number} translates to: ${romanNumeralGenerator.generate(number)}\n`)
            } catch (e) {
                console.log(`\n${e.message}\n`);
            }
        } else {
            console.log('\nPlease enter a valid number.\n');
        }

        start();
    });
};

start();

