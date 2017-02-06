const NodeGeocoder = require('node-geocoder');
const GOOGLE_API_KEY = 'AIzaSyDZzvtWHnZulmIBexc6h1zPiJHs-RlQNsU';
const geocoder = NodeGeocoder({
  provider: 'google',
  apiKey: GOOGLE_API_KEY,
  formatter: null         // 'gpx', 'string', ...
});

const locations = [
  {
    latitude: 50.826991,
    longitude: -0.136061
  },
  {
    latitude: 21.300193,
    longitude: -157.851261
  },
  {
    latitude:  49.180231,
    longitude: -122.851904
  },
  {
    latitude: 5.538616,
    longitude: 30.455494
  }
];

const getLatestLocation = function() {
  //  MOCKING FOR THE TIME BEING
  // TODO: Error Handling
  return new Promise(resolve => {
    const location = locations[Math.floor(Math.random()*locations.length)];
    resolve(location);
  })
};

const getCity = function(location) {
  return new Promise((resolve, reject) => {
    geocoder.reverse({
      lat: location.latitude,
      lon: location.longitude
    })
    .then(res => resolve(res))
    .catch(err => {
      console.log('error');
      console.log(err);
      reject(err);
    });
  });
};


module.exports = {
  getLatestLocation,
  getCity
};

