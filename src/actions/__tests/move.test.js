const move = require('../move');

describe('Move function', () => {
  const boardDimensions = {
    width: 5,
    height: 5,
  };

  it('returns the correct updated x/y positions for all possible directions', () => {
    expect(
      move({
        positionX: 2,
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
        positionX: 2,
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
        positionX: 2,
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
        positionX: 2,
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
        positionX: 0,
        positionY: 0,
        direction: 'south',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: 0,
        positionY: 0,
        direction: 'west',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: 0,
        positionY: boardDimensions.height,
        direction: 'north',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: 0,
        positionY: boardDimensions.height,
        direction: 'west',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: boardDimensions.width,
        positionY: boardDimensions.height,
        direction: 'east',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: boardDimensions.width,
        positionY: boardDimensions.height,
        direction: 'north',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);

    expect(
      move({
        positionX: boardDimensions.width,
        positionY: 0,
        direction: 'east',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
    expect(
      move({
        positionX: boardDimensions.width,
        positionY: 0,
        direction: 'south',
        boardDimensions: boardDimensions,
      })
    ).toEqual(expectedObject);
  });
});
