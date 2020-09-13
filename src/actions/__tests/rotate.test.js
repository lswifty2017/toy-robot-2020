const rotate = require('../rotate');

describe('Rotate function', () => {
  it('returns the correct updated direction for the "left" command for all possible directions', () => {
    expect(rotate('left', 'north')).toEqual('west');
    expect(rotate('left', 'east')).toEqual('north');
    expect(rotate('left', 'south')).toEqual('east');
    expect(rotate('left', 'west')).toEqual('south');
  });

  it('returns the correct updated direction for the "right" command for all possible directions', () => {
    expect(rotate('right', 'north')).toEqual('east');
    expect(rotate('right', 'east')).toEqual('south');
    expect(rotate('right', 'south')).toEqual('west');
    expect(rotate('right', 'west')).toEqual('north');
  });
});
