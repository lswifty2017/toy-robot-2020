const move = ({ positionX, positionY, direction, boardDimensions }) => {
  const { height, width } = boardDimensions;

  if (direction === 'north') {
    if (positionY === height) {
      return { spaceLimitExceeded: true };
    }

    return {
      updatedPositionX: positionX,
      updatedPositionY: positionY + 1,
      spaceLimitExceeded: false,
    };
  }

  if (direction === 'south') {
    if (positionY === 0) {
      return { spaceLimitExceeded: true };
    }

    return {
      updatedPositionX: positionX,
      updatedPositionY: positionY - 1,
      spaceLimitExceeded: false,
    };
  }

  if (direction === 'east') {
    if (positionX === width) {
      return { spaceLimitExceeded: true };
    }

    return {
      updatedPositionX: positionX + 1,
      updatedPositionY: positionY,
      spaceLimitExceeded: false,
    };
  }

  if (direction === 'west') {
    if (positionX === 0) {
      return { spaceLimitExceeded: true };
    }

    return {
      updatedPositionX: positionX - 1,
      updatedPositionY: positionY,
      spaceLimitExceeded: false,
    };
  }
};

module.exports = move;
