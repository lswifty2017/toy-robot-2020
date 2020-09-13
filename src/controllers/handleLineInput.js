const parseInput = require('../parser/parseInput');
const rotate = require('../actions/rotate');
const move = require('../actions/move');

const handleLineInput = (input, prompt, robotState, boardDimensions) => {
  const { direction, positionX, positionY, placed } = robotState;
  const parsedInput = parseInput(input);

  if (!parsedInput.success) {
    console.log(parsedInput.errorMessage);
    return prompt;
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
      return prompt;
    }

    // Set robot state
    robotState.direction = parsedInput.direction;
    robotState.positionX = parsedInput.positionX;
    robotState.positionY = parsedInput.positionY;
    robotState.placed = true;

    console.log(
      `Robot placed at X: ${robotState.positionX}, Y: ${robotState.positionY}, Direction: ${robotState.direction}`
    );

    return prompt;
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
        return prompt;
      }

      robotState.positionX = newPosition.updatedPositionX;
      robotState.positionY = newPosition.updatedPositionY;

      return prompt;
    }

    if (action === 'report') {
      console.log(
        `My X co-ordinate is ${positionX} and my Y co-ordinate is ${positionY}. I'm facing ${direction}.`
      );
      return prompt;
    }

    if (action === 'rotateLeft') {
      const newDirection = rotate('left', direction);
      robotState.direction = newDirection;
      return prompt;
    }

    if (action === 'rotateRight') {
      const newDirection = rotate('right', direction);
      robotState.direction = newDirection;
      return prompt;
    }
  }

  console.log(
    'Robot has not yet been placed. Please place robot before using any other command'
  );
  return prompt;
};

module.exports = handleLineInput;
