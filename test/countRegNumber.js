module.exports = function (regNumber, location){
    var Town = [];
    var NumberRegistration =regNumber.split(',')
    for(var i=0; i<NumberRegistration.length; i++){
      var countReg =NumberRegistration[i].trim();
      if(countReg.startsWith(location)){
        Town.push(NumberRegistration[i]);
      }
    }
    return Town.length;
}
