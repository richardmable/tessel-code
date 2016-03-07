// import the interface to the Tessel hardware
var tessel = require('tessel');

// set the lead pins as outputs with intial states
// truthy intial states sets the pin high
// falsy sets it low

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(0);
var led4 = tessel.led[3].output(0);
setInterval(function(){
console.log("I'm blinking! Press Ctrl + C to stop.")


led1.toggle();
led2.toggle();
led3.toggle();
led4.toggle();

}, 1000);
