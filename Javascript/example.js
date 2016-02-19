// var exampleArray = [ 2, -5, 10,  5,  4, -10,  0 ];

// var result = exampleArray.reduce(function(result, x, i){
//   return exampleArray.reduce(function(aux, y, j){
//     return x + y === 0
//     ? aux.concat('(' + i + ',' + j + ')')
//     :aux
//   }, result)
// }, [])

// console.log(result)


//salida --> ['(8,5)', '(6,7)'']


//////////////////////////////////////////////

// var sample_array = [2, -5, 10, 5, 4, -10, 0 ]
// function process(data){
//     var positions = [];
//     data.forEach (function (a, i) {
//         data.forEach (function (b, j) {
//             if (a + b === 0) {positions.push ( i +","+ j )}
//         });
//     });
//     console.log("You can sum these pairs of numbers and get zero:");
//     console.log(positions);
// }
// process(sample_array);

////////////////////////////////////////////

// var numbers = '80:70:90:100';

// function averageColon(numbers){
//   return numbers.split(':').reduce(function (result, number, index, vector){
//     return result + parseInt(number) / vector.length
//   }, 0)
// }

// console.log(averageColon(numbers))

////////////////////////////////////////////

// var Car = function(model, noise) {
//   this.model = model;

//   this.noise = noise;

//   wheels = 4;

// };

// Car.prototype.makeNoise = function(){
//   console.log(this.noise + "!!!!");
// }

// var mercedes = new Car('Mercedes', 'Brrrbrbrbrbruunnn')
// mercedes.makeNoise()

/////////////////

// function shout(){
//   console.log('aaaaaaaaaah');
// }

// setTimeout(shout, 10000);

//sleep 10 sec y pasr callback

//Declare as function expresision

// function sleep(time, fn){
//   setTimeout(function(){
//     fn(time);
//   }, time * 1000);
// }

// console.log('Started');

// sleep(2, function(time){
//   console.log('It was ' + time + ' seconds');
// })

// console.log('This is executed before the callback');

// sleep(10, function(){  
//   console.log('Its been 10 seconds!')
// })

//-----------------------------------------------
// CLOSURES ----------------------------------

function ticketBuilder(transport) {
  var passengerNumber = 0;
return function(name) {
        passengerNumber += 1;
        console.log("Welcome, " + name + ". Here is your ticket for the " + transport + "!");
        console.log("You are passenger #" + passengerNumber)
  }
}

var getPlaneTicket = ticketBuilder('plane');
var getBusTicket = ticketBuilder('bus');

getPlaneTicket('pepito');
getBusTicket('jaimito');
getBusTicket('jorgito');

