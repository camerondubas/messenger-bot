export const getWeather = function(location) {
  return new Promise((resolve, reject) => {
      resolve(forecastMock);
  });
};

export const forecastMock = [
  {
    "dt": 1493290800,
    "temp": {
      "day": 28.49,
      "min": 27.51,
      "max": 28.49,
      "night": 27.51,
      "eve": 28.47,
      "morn": 28.49
    },
    "pressure": 1023.62,
    "humidity": 100,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "speed": 4.45,
    "deg": 144,
    "clouds": 56,
    "rain": 0.22
  },
  {
    "dt": 1493377200,
    "temp": {
      "day": 28.41,
      "min": 28.09,
      "max": 28.53,
      "night": 28.09,
      "eve": 28.48,
      "morn": 28.42
    },
    "pressure": 1025.89,
    "humidity": 100,
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "speed": 4.02,
    "deg": 145,
    "clouds": 36
  },
  {
    "dt": 1493463600,
    "temp": {
      "day": 27.95,
      "min": 27.47,
      "max": 28.16,
      "night": 28.08,
      "eve": 28.16,
      "morn": 27.66
    },
    "pressure": 1026.2,
    "humidity": 100,
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "speed": 3.56,
    "deg": 158,
    "clouds": 36
  },
  {
    "dt": 1493550000,
    "temp": {
      "day": 28.51,
      "min": 28.06,
      "max": 28.51,
      "night": 28.13,
      "eve": 28.29,
      "morn": 28.06
    },
    "pressure": 1026.36,
    "humidity": 100,
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "speed": 3.65,
    "deg": 186,
    "clouds": 68
  },
  {
    "dt": 1493636400,
    "temp": {
      "day": 27.68,
      "min": 27.41,
      "max": 27.68,
      "night": 27.46,
      "eve": 27.57,
      "morn": 27.41
    },
    "pressure": 1025.9,
    "humidity": 0,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "speed": 1.7,
    "deg": 273
  }
];
