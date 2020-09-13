require('colors');
const readline = require('readline');
const handleLineInput = require('./src/controllers/handleLineInput');

console.log('Welcome to Toy Robot. \n'.green.bold);
console.log('These are the valid robot commands: \n'.bold);
console.log('PLACE X,Y,D'.bold.underline);
console.log(
  '- Where X and Y are board coordinates and D (direction) must be either NORTH, SOUTH, WEST or EAST\n'
);
console.log('MOVE'.bold.underline);
console.log('- Will move the robot one unit in current direct\n');
console.log('LEFT'.bold.underline);
console.log('- Will rotate the robot 90 degrees to the left\n');
console.log('RIGHT'.bold.underline);
console.log('- Will rotate the robot 90 degrees to the right\n');
console.log('REPORT'.bold.underline);
console.log(
  '- The robot will say the current position and facing direction \n'
);

const boardDimensions = Object.freeze({ width: 5, height: 5 });

const robotState = {
  placed: false,
  direction: null,
  positionX: null,
  positionY: null,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  handleLineInput(input, rl.prompt(), robotState, boardDimensions);
}).on('close', () => {
  console.log('Thanks for playing');
  process.exit(0);
});

rl.prompt();

module.exports.handleLineInput = handleLineInput;
