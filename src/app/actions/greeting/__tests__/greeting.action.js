import greetingAction from '../greeting.action';

describe('Greeting Action', () => {
  test('Returns a  Wit Context Object with a greeting property', () => {
    const context = {};
    const entities = {};
    expect(greetingAction({context, entities})).toHaveProperty('greeting');
  })
});
