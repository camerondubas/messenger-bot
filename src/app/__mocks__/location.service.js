export const locationMock = [{
  latitude: 48.8698679,
  longitude: 2.3072976,
  country: 'France',
  countryCode: 'FR',
  city: 'Paris',
  zipcode: '75008',
  streetName: 'Champs-Élysées',
  streetNumber: '29',
  administrativeLevels: {
    level1long: 'Île-de-France',
    level1short: 'IDF',
    level2long: 'Paris',
    level2short: '75'
  },
  provider: 'google'
}];

const geocoder = {
  geocode: (locationName, callback) => {
    return callback(null, locationMock);
  }
};

export default geocoder;

