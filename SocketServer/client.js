var simplecached = require('simplecached');

var OPTIONS = {
    // port: 11312,
    // host: '127.0.0.1'
    port: 11511,
    host: '10.28.31.244' ///SERVIDOR DE JAVI
};

var client = new simplecached.Client(OPTIONS, function(error) {
    console.log('Client connected');
    var key = 'ironhack';
    var value = 'we are ironhackers';

    client.set(key, value, function(error, result){
      if (error) console.log('Error setting the key');
      if (result) console.log('The key and value was set.');
      if (!result) console.log('the key and ciaoosoiio');

      client.get(key, function(error, value){
        console.log('READ -> ', value);
        client.close();
      })
    })
});

// var client = new client.Client(OPTIONS, function(error) {
//     console.assert(!error, 'Could not open connection');
//     var key = 'testing';
//     var value = 'real value';
//     client.set(key, value, function(error, result) {
//         console.assert(!error, 'Error setting key');
//         console.assert(result, 'Could not set key');
//         client.get(key, function(error, result) {
//             console.assert(!error, 'Error getting key');
//             console.assert(result == value, 'Invalid get key');
//             client.delete(key, function(error, result) {
//                 console.assert(!error, 'Error deleting key');
//                 console.assert(result, 'Could not delete key');
//                 client.close(function(error) {
//                     console.assert(!error, 'Error closing client');
//                 });
//             });
//         });
//     });
// });