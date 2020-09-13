const parseInput = require('../parseInput');

describe('Parse Input function', () => {
  it('returns an object with property "success" set to false upon invalid input', () => {
    expect(parseInput('vfdsv fdv fs ').success).toBeFalsy();
    expect(parseInput('').success).toBeFalsy();
  });

  it('returns an object with property "success" set to true upon valid input', () => {
    expect(parseInput('PLACE 0,0,NORTH').success).toBeTruthy();
    expect(parseInput('PLACE 1,3,SOUTH').success).toBeTruthy();
    expect(parseInput('LEFT').success).toBeTruthy();
    expect(parseInput('RIGHT').success).toBeTruthy();
    expect(parseInput('REPORT').success).toBeTruthy();
    expect(parseInput('MOVE').success).toBeTruthy();
  });

  it('returns an object with property "action" set to given action upon valid input', () => {
    expect(parseInput('PLACE 0,0,NORTH').action).toEqual('place');
    expect(parseInput('LEFT').action).toEqual('rotateLeft');
    expect(parseInput('RIGHT').action).toEqual('rotateRight');
    expect(parseInput('REPORT').action).toEqual('report');
    expect(parseInput('MOVE').action).toEqual('move');
  });

  it('returns an object with x/y position and direction properties upon "PLACE" command', () => {
    expect(parseInput('PLACE 0,0,NORTH').positionX).toEqual(0);
    expect(parseInput('PLACE 0,1,NORTH').positionY).toEqual(1);
    expect(parseInput('PLACE 2,2,NORTH').direction).toEqual('north');
  });
});
