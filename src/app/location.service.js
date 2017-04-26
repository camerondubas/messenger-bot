const NodeGeocoder = require('node-geocoder');
const GOOGLE_API_KEY = 'AIzaSyDZzvtWHnZulmIBexc6h1zPiJHs-RlQNsU';
export default NodeGeocoder({
  provider: 'google',
  apiKey: GOOGLE_API_KEY,
  formatter: null
});

