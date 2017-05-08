module.exports = function(count){
  var Paarl = [];
  var NumberRegistration = count.split(', ')
 for(var i=0; i<NumberRegistration.length; i++){
   if(NumberRegistration[i].startsWith('CJ')){
     Paarl.push(NumberRegistration[i]);
   }
 }
  return Paarl.length;
};
