var read = require('read');

// options = {
//     prompt: "What's your name?\n>"
// }
// // Our options object, the prompt is simply what will appear in the command line when read is called

// read(options, displayName)
// // The prompt itself, passing options, and using our callback function after input

// function displayName (err, name){
//     console.log("Your name is: " + name)
// }
// // Outputs whatever the user has entered back to the console

var Quiz = function(id){
  

  this.easy_questions = [
  q_01 = new Question('Eres tonto??', 'si', 1),
  q_02 = new Question('Seguroo??', 'no', 2),
  q_03 = new Question('En serio??', 'si', 3)
  ]


  // this.puntuation = function

};

var Question = function(statement,answer,id){

  this.statement = statement;
  this.answer = answer;
  this.idquestion = id;
  
};

partida1 = new Quiz();

// var n = 0;
// while (n < partida1.easy_questions.length){

read({prompt: partida1.easy_questions[0].statement}, function(err, current_answer){
  if (current_answer.toLowerCase() === partida1.easy_questions[0].answer.toLowerCase()){
    console.log('RESPUESTA CORRECTA!!!');
    }else{
    console.log('lo siento estas muy equivocado...');
    }
    read({prompt: partida1.easy_questions[1].statement}, function(err, current_answer){
      if (current_answer.toLowerCase() === partida1.easy_questions[1].answer.toLowerCase()){
      console.log('RESPUESTA CORRECTA!!!');
      }else{
      console.log('lo siento estas muy equivocado...');
      }
      read({prompt: partida1.easy_questions[2].statement}, function(err, current_answer){
        if (current_answer.toLowerCase() === partida1.easy_questions[2].answer.toLowerCase()){
        console.log('RESPUESTA CORRECTA!!!');
        }else{
        console.log('lo siento estas muy equivocado...');
        }
    }) 
  })
})
// n++;
// }

