module.exports = function isFromBellville(regNum){
  var Registration = regNum.startsWith('CY');
  return Registration;
}
