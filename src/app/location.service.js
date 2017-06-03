const NodeGeocoder = require('node-geocoder');
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default NodeGeocoder({
  provider: 'google',
  apiKey: GOOGLE_API_KEY,
  formatter: null
});

