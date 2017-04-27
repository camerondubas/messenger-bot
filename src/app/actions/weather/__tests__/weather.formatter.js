import weatherFormatter from '../weather.formatter';

import { forecastMock } from '../__mocks__/weather.service';
import { locationMock } from '../../../__mocks__/location.service';

describe('Weather Message Formatter', () => {
  test('Format a simple message', () => {
    const output = `Today in 🇫🇷 Paris, France it's going to be 28 °C.`;

    expect(weatherFormatter(forecastMock, locationMock[0])).toBe(output);
  });
})
