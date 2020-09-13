const parseInput = (userInput = '') => {
  if (!userInput) {
    return {
      success: false,
      errorMessage:
        'No input detected, please use of the following commands: \nMOVE \nREPORT \nLEFT \nRIGHT \nPLACE x,y,z',
    };
  }

  const splitInput = userInput.split(' ');
  const actionType = splitInput[0].toUpperCase();

  if (actionType === 'PLACE') {
    // Check if arguments are given for place command
    if (splitInput.length < 2) {
      return {
        success: false,
        errorMessage:
          'No place position/direction detected, please use the following format: PLACE x,y,z',
      };
    }

    const splitCommands = splitInput[1].split(',');

    // Check for 3 arguments in string
    if (splitCommands.length === 3) {
      const positionX = parseInt(splitCommands[0]);
      const positionY = parseInt(splitCommands[1]);
      const direction = splitCommands[2];

      if (
        !isNaN(positionX) &&
        !isNaN(positionY) &&
        ['NORTH', 'EAST', 'SOUTH', 'WEST'].includes(direction.toUpperCase())
      ) {
        return {
          success: true,
          action: 'place',
          positionX: positionX,
          positionY: positionY,
          direction: direction.toLowerCase(),
        };
      }
    }

    return {
      success: false,
      errorMessage: 'Place command invalid, check x,y,z format',
    };
  }

  if (actionType === 'MOVE') {
    return {
      success: true,
      action: 'move',
    };
  }

  if (actionType === 'LEFT') {
    return {
      success: true,
      action: 'rotateLeft',
    };
  }

  if (actionType === 'RIGHT') {
    return {
      success: true,
      action: 'rotateRight',
    };
  }

  if (actionType === 'REPORT') {
    return {
      success: true,
      action: 'report',
    };
  }

  return {
    success: false,
    errorMessage:
      'Command invalid, please use of the following commands: \nMOVE \nREPORT \nLEFT \nRIGHT \nPLACE x,y,z',
  };
};

module.exports = parseInput;
