// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
// require the accelerometer module and use port A
var accel = require('accel-mma84').use(tessel.port['A']);

// initialize the accelerometer

accel.on('ready', function(){

steps = 0;
// stream accelerometer data
  accel.setOutputRate(20, function rateSet(){
    accel.on('data', function(xyz) {
     if (xyz[0] > 0.5){
     	steps += 1;
     }
     console.log(steps);
    });
  });
});

accel.on('error', function(err){
  console.log("Error: ", err);
}); 


