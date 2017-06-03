jest.unmock('request');
jest.unmock('../weather.service');

jest.mock('request', () => {
  return (url, cb) => {
    let forecastMock = require('../__mocks__/weather.service').forecastMock;

    let error = null;
    let response = {statusCode: 200};
    let body = JSON.stringify({list: forecastMock});

    return cb(error, response, body)
  };
});

import { getWeather } from '../weather.service';

describe('Weather Service', () => {
  test('Get Weather', () => {
    return getWeather({latitude: 0, longitude: 0}).then(
      data => {
        let forecastMock = require('../__mocks__/weather.service').forecastMock;
        expect(data).toMatchObject(forecastMock);
      }
    )
  })
});
