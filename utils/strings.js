const removeLineBreaks = function(str) {
  return str.replace(/\n/gm,"");
};

const removeWhitespace  = function(str) {
  return str.replace(/\s/g,'')
};


const toTitleCase = function(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

module.exports = {
  removeLineBreaks,
  removeWhitespace,
  toTitleCase
};

