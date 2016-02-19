function caesarCipher (message) { 

}

// var encrypted = caesarCipher("brutus");

// console.log(encrypted);




// var map = Array.prototype.map;

// var valores = map.call('Hello World', function(char) { return char.charCodeAt(0); });

//console.log( String.fromCharCode(95)  );  //=> "_"

var mensaje_origen = 'hola ke ase'

var res = mensaje_origen.split("")

var characterstonum = res.map(function(chars) { 
  return chars.charCodeAt(0); 
})

var numtochar = characterstonum.map(function(num){
  return num - 3;
})

var vueltachar = numtochar.map(function(charss){
  return String.fromCharCode(charss);
})

console.log(vueltachar)












