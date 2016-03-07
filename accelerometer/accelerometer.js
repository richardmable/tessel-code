// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
// require the accelerometer module and use port A
var accel = require('accel-mma84').use(tessel.port['A']);

// intialize the accelerometer

accel.on('ready', function(){
// stream accelerometer data
  accel.on('data', function(xyz) {
    console.log('x:', xyz[0].toFixed(2),
    'y:', xyz[1].toFixed(2),
    'z', xyz[2].toFixed(2));
  });
});

accel.on('error', function(err){
  console.log("Error: ", err);
}); 


