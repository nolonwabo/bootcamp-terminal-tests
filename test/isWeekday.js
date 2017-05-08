module.exports = function(day){
  var weekend =day.startsWith('S');
  var weekend =!day.startsWith('S');
  return weekend;
}
