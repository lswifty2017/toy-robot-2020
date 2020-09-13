require('colors');
const readline = require('readline');
const parseInput = require('./src/parser/parseInput');
const rotate = require('./src/actions/rotate');

console.log('Welcome to toy robot.'.green.bold);
console.log('');
console.log('These are valid command:'.bold);
console.log('PLACE x,y,f'.bold.underline);
console.log(
  '- Where x and y is coordinates and f (facing) must be either NORTH, SOUTH, WEST or EAST'
);
console.log('MOVE'.bold.underline);
console.log('- Will move the robot one unit in current direct');
console.log('LEFT'.bold.underline);
console.log('- Will rotate the robot 90 degrees to the left');
console.log('RIGHT'.bold.underline);
console.log('- Will rotate the robot 90 degrees to the right');
console.log('REPORT'.bold.underline);
console.log(
  '- The robot will say the current position and facing direction \n'
);

const board = Object.freeze({ width: 5, height: 5 });

const robotState = {
  direction: null,
  positionX: null,
  positionY: null,
};

// Dev Code

const newDirection = rotate('left', 'north');

console.log(newDirection);

//

// const handleLineInput = (input) => {
//   const parsedInput = parseInput(input);

//   if (!parsedInput.success) {
//     console.log(parsedInput.errorMessage);
//     rl.prompt();
//   }

//   if (parsedInput.success) {
//     console.log(parsedInput.action);
//     rl.close();
//   }

//   // console.log(`handling input ${input}`);
//   // rl.close();
// };

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', handleLineInput)
//   .on('close', () => {
//     console.log('Thanks for playing');
//     process.exit(0);
//   })
//   .setPrompt('Robot Command: ');

// rl.prompt();
