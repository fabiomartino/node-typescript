// Import
import chalk from 'chalk';

// Const
const nts = chalk.yellow(`Node with TypeScript`);
const hello = (word: string = 'world'): any => {
  console.log(`${chalk.blue('Hello')} ${word}!`);
};

hello(nts);
