var simplecached = require('simplecached');
var PORT = 11312;


var server = simplecached.Server(PORT, function(error, result) {
    console.log('Server started...');
});