const rotate = (rotateDirection = '', currentDirection = '') => {
  let newDirection = '';

  if (rotateDirection === 'right') {
    switch (currentDirection) {
      case 'north':
        newDirection = 'east';
        break;
      case 'east':
        newDirection = 'south';
        break;
      case 'south':
        newDirection = 'west';
        break;
      case 'west':
        newDirection = 'north';
        break;
    }
  }

  if (rotateDirection === 'left') {
    switch (currentDirection) {
      case 'north':
        newDirection = 'west';
        break;
      case 'east':
        newDirection = 'north';
        break;
      case 'south':
        newDirection = 'east';
        break;
      case 'west':
        newDirection = 'south';
        break;
    }
  }

  return newDirection;
};

module.exports = rotate;
