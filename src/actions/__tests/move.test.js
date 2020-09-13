const move = require('../move');

describe('Move function', () => {
  const boardDimensions = {
    width: 5,
    height: 5,
  };

  it('returns the correct updated x/y positions for all possible directions', () => {
    expect(
      move({
        postionX: 2,
        positionY: 2,
        direction: 'north',
        boardDimensions: boardDimensions,
      })
    ).toEqual({
      updatedPositionX: 2,
      updatedPositionY: 3,
      spaceLimitExceeded: false,
    });

    expect(
      move({
        postionX: 2,
        positionY: 2,
        direction: 'south',
        boardDimensions: boardDimensions,
      })
    ).toEqual({
      updatedPositionX: 2,
      updatedPositionY: 1,
      spaceLimitExceeded: false,
    });

    expect(
      move({
        postionX: 2,
        positionY: 2,
        direction: 'east',
        boardDimensions: boardDimensions,
      })
    ).toEqual({
      updatedPositionX: 3,
      updatedPositionY: 2,
      spaceLimitExceeded: false,
    });

    expect(
      move({
        postionX: 2,
        positionY: 2,
        direction: 'west',
        boardDimensions: boardDimensions,
      })
    ).toEqual({
      updatedPositionX: 1,
      updatedPositionY: 2,
      spaceLimitExceeded: false,
    });
  });

  it('returns property "spaceLimitExceeded" set to true when position exceeds board height/width limit', () => {
    const expectedObject = { spaceLimitExceeded: true };

    expect(
      move({
        xDirection: 0,
        yDirection: 0,
        direction: 'south',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        xDirection: 0,
        yDirection: 0,
        direction: 'west',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: 0,
        positionY: boardHeight,
        direction: 'north',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: 0,
        positionY: boardHeight,
        direction: 'west',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: boardWith,
        positionY: boardHeight,
        direction: 'east',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: boardWith,
        positionY: boardHeight,
        direction: 'north',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: boardWith,
        positionY: 0,
        direction: 'east',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: boardWith,
        positionY: 0,
        direction: 'south',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
  });
});
