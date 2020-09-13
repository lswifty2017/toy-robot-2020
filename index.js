require('colors');
const readline = require('readline');
const parseInput = require('./src/parser/parseInput');
const rotate = require('./src/actions/rotate');
const move = require('./src/actions/move');

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

const boardDimensions = Object.freeze({ width: 5, height: 5 });

const robotState = {
  placed: false,
  direction: null,
  positionX: null,
  positionY: null,
};

const handleLineInput = (input) => {
  const { direction, positionX, positionY, placed } = robotState;
  const parsedInput = parseInput(input);

  if (!parsedInput.success) {
    console.log(parsedInput.errorMessage);
    return rl.prompt();
  }

  const { action } = parsedInput;

  if (action === 'place') {
    // Check if being placed off the board
    if (
      parsedInput.positionX > boardDimensions.width ||
      parsedInput.positionX < 0 ||
      parsedInput.positionY > boardDimensions.height ||
      parsedInput.positionY < 0
    ) {
      console.log('Robot has cannot be placed off the board');
      return rl.prompt();
    }

    // Set robot state
    robotState.direction = parsedInput.direction;
    robotState.positionX = parsedInput.positionX;
    robotState.positionY = parsedInput.positionY;
    robotState.placed = true;

    return rl.prompt();
  }

  if (placed) {
    if (action === 'move') {
      const newPosition = move({
        positionX: positionX,
        positionY: positionY,
        direction: direction,
        boardDimensions: boardDimensions,
      });

      if (newPosition.spaceLimitExceeded) {
        console.log(
          'Robot has reached the edge of the board. Please rotate or place robot before moving again'
        );
        return rl.prompt();
      }

      robotState.positionX = newPosition.updatedPositionX;
      robotState.positionY = newPosition.updatedPositionY;

      return rl.prompt();
    }

    if (action === 'report') {
      console.log(
        `My X co-ordinate is ${positionX} and my Y co-ordinate is ${positionY}. I'm facing ${direction}`
      );
      return rl.prompt();
    }

    if (action === 'rotateLeft') {
      const newDirection = rotate('left', direction);
      robotState.direction = newDirection;
      return rl.prompt();
    }

    if (action === 'rotateRight') {
      const newDirection = rotate('right', direction);
      robotState.direction = newDirection;
      return rl.prompt();
    }
  }

  console.log(
    'Robot has not yet been placed. Please place robot before using any other command'
  );
  return rl.prompt();
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', handleLineInput)
  .on('close', () => {
    console.log('Thanks for playing');
    process.exit(0);
  })
  .setPrompt('Robot Command: ');

rl.prompt();
