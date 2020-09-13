const handleLineInput = require('../handleLineInput');

const boardDimensions = Object.freeze({ width: 5, height: 5 });

describe('handleLineInput function', () => {
  it('should not change the robot state if actions are given before robot is placed', () => {
    const robotState = {
      placed: false,
      direction: null,
      positionX: null,
      positionY: null,
    };

    handleLineInput('move', null, robotState, boardDimensions);
    handleLineInput('left', null, robotState, boardDimensions);
    handleLineInput('right', null, robotState, boardDimensions);

    expect(robotState).toEqual({
      placed: false,
      direction: null,
      positionX: null,
      positionY: null,
    });
  });

  it('should not place the robot if the co-ordinates are outside of the board dimensions', () => {
    const robotState = {
      placed: false,
      direction: null,
      positionX: null,
      positionY: null,
    };

    const expectedState = {
      placed: false,
      direction: null,
      positionX: null,
      positionY: null,
    };

    handleLineInput('place 10,0,NORTH', null, robotState, boardDimensions);
    expect(robotState).toEqual(expectedState);

    handleLineInput('place 0,-1,NORTH', null, robotState, boardDimensions);
    expect(robotState).toEqual(expectedState);
  });

  it('should not allow the robot to move off of the board', () => {
    const robotStateMax = {
      placed: true,
      direction: 'north',
      positionX: boardDimensions.width,
      positionY: boardDimensions.height,
    };

    const robotStateMin = {
      placed: true,
      direction: 'south',
      positionX: 0,
      positionY: 0,
    };

    handleLineInput('move', null, robotStateMax, boardDimensions);
    expect(robotStateMax).toEqual({
      placed: true,
      direction: 'north',
      positionX: boardDimensions.width,
      positionY: boardDimensions.height,
    });

    handleLineInput('right', null, robotStateMax, boardDimensions);
    handleLineInput('move', null, robotStateMax, boardDimensions);
    expect(robotStateMax).toEqual({
      placed: true,
      direction: 'east',
      positionX: boardDimensions.width,
      positionY: boardDimensions.height,
    });

    handleLineInput('move', null, robotStateMin, boardDimensions);
    expect(robotStateMin).toEqual({
      placed: true,
      direction: 'south',
      positionX: 0,
      positionY: 0,
    });

    handleLineInput('right', null, robotStateMin, boardDimensions);
    handleLineInput('move', null, robotStateMin, boardDimensions);
    expect(robotStateMin).toEqual({
      placed: true,
      direction: 'west',
      positionX: 0,
      positionY: 0,
    });
  });

  it('should rotate in both left and right directions', () => {
    const robotState = {
      placed: true,
      direction: 'east',
      positionX: 2,
      positionY: 2,
    };

    handleLineInput('left', null, robotState, boardDimensions);
    expect(robotState).toEqual({
      placed: true,
      direction: 'north',
      positionX: 2,
      positionY: 2,
    });

    handleLineInput('right', null, robotState, boardDimensions);
    expect(robotState).toEqual({
      placed: true,
      direction: 'east',
      positionX: 2,
      positionY: 2,
    });
  });
});
