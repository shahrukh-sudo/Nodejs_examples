
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// Combine styled and normal strings
const yargs = require('yargs')
   
// Customize yargs version
yargs.version('1.1.0')

console.log(process.argv);
console.log("    gg");
// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  // Required
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
  
    // Function for your command
    handler(argv) {
        console.log("Result:", 
            (argv))
    }
})
   
yargs.parse() // To set above changes





