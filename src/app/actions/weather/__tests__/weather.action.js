jest.mock('../../../location.service');
jest.mock('../weather.service');
jest.mock('../weather.formatter');

import weatherAction from '../weather.action';
import weatherFormatter from '../weather.formatter';

describe('Weather Action', () => {
  test('Handles empty context and entities', () => {
    const context = {};
    const entities = {};

    return weatherAction({context, entities}).then(response => {
      expect(response).toHaveProperty('weatherNoLocation');
    });
  });

  test('Handles empty context and entities', () => {
    const context = {};
    const entities = {
      location: [
        {
          value: '29 champs elysée paris'
        }
      ]
    };

    return weatherAction({context, entities}).then(response => {
      expect(response).toHaveProperty('weather');
      expect(weatherFormatter).toHaveBeenCalled();
      expect(weatherFormatter.mock.calls.length).toBe(1);

    });
  });

});
