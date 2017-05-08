module.exports = function(bills){
  var Phone =bills.split(',');
  var total = 0;
    for(var i=0; i<Phone.length; i++){
     	var calls = Phone[i].trim();
      if(calls.startsWith('call')){
        total = total + 2.75;
      }
      else if(calls.startsWith('sms')){
        total = total + 0.65;
      }
    }
    return 'R' + total.toFixed(2);
    };
