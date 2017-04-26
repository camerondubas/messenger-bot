export const removeLineBreaks = function(str) {
  return str.replace(/\n/gm,"");
};

export const removeWhitespace  = function(str) {
  return str.replace(/\s/g,'')
};


export const toTitleCase = function(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
