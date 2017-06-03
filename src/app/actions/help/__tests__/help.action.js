import helpAction from '../help.action';

describe('Help  Action', () => {
  test('Returns a  Wit Context Object with a help property', () => {
    const context = {};
    const entities = {};

    expect(helpAction({context, entities})).toHaveProperty('help');
  })
});
