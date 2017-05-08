module.exports = function(year){
  var date = new Date();
  var whichYear = date.getFullYear();
  var outcome = whichYear - year;
  return outcome;
}
