
function getRandomStrengthAndHealth(min, max) {
    var aleat = Math.random() * (max - min) + min;
    return Math.round(aleat)
};

var Viking = function(name) {
  
  this.name = name;
  this.strength = getRandomStrengthAndHealth(10, 100);
  this.health = getRandomStrengthAndHealth(100, 1000)

  this.attack = function () {
    return this.strength;
  }

  this.recieveDamage = function(damage) {
    this.health -= damage;
    // console.log(health);
  }

};

var Pit = function(fighter1, fighter2){
  
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;
  this.turn = 1;

  this.fight = function(){     
      while ((this.fighter1.health > this.fighter2.strength) && (this.fighter2.health > this.fighter1.strength)){
      this.fighter2.recieveDamage(this.fighter1.attack());
      this.fighter1.recieveDamage(this.fighter2.attack());
      this.turn ++;
    }
  }

  this.actualStatus = function(){
    console.log('The fight had ' + this.turn + ' rounds')
    console.log('Life of ' + this.fighter1.name + ' after fight is ' + this.fighter1.health);
    console.log('Life of ' + this.fighter2.name + ' after fight is ' + this.fighter2.health);
  }

  this.whoWins = function(){
    if (this.fighter2.health < this.fighter1.health){
      console.log(this.fighter1.name + ' WINS!!!!!')
    }else{
      console.log(this.fighter2.name + ' WINS!!!!!')
    }
  }
};

var Saxon = function() {
  this.strength = getRandomStrengthAndHealth(1, 10);
  this.health = getRandomStrengthAndHealth(20, 100);
  this.attack = function () {
    return this.strength;
  }
  this.recieveDamage = function(damage) {
    this.health -= damage;
    // console.log(health);
  }
};

var FullfillArmy = function(){
  this.saxonarmy = [];
  this.vinkingarmy = [];
  
  this.createSaxonArmy = function(){
    for (i = 0; i < 50; i++){
      this.saxonarmy.push(new Saxon());
    }
  }

};

var BattleField = function(vikings, saxons){
  this.vikingArmy = vikings;
  this.saxonArmy = saxons;
  this.fights = 1;

  this.battle = function(){
    while ((this.vikingArmy[0].health > this.saxonarmy[0].health) && (this.saxonarmy[0].health > this.vikingArmy[0].health)){
      this.saxonarmy[0].recieveDamage(this.vikingArmy[0].attack());
      this.vikingArmy[0].recieveDamage(this.saxonarmy[0].attack());
      this.fights++;
    }
  }
 
 this.actualStatus = function(){
    console.log('The fight had ' + this.fights + ' fights');
    console.log('Life of ' + this.vikingArmy[0].name + ' after fight is ' + this.vikingArmy[0].health);
    console.log('Life of anonymous saxon token after fight is ' + this.saxonarmy[0].health);
  }

}




var Loki = new Viking('Loki');
var Thor = new Viking('Thor');

var vikingos = [Loki, Thor]

var ejercitosajon = new FullfillArmy();
var sajones = ejercitosajon.createSaxonArmy();

var movidote = new War(vikingos, sajones); 

var batalla = new 






// console.log('//////////////////////////')
// console.log(Loki.name + ' strength is ' + Loki.strength);
// console.log(Loki.name + ' health is ' + Loki.health);
// console.log(Thor.name + ' strength is ' + Thor.strength)
// console.log(Thor.name + ' health is ' + Thor.health);


// var training = new Pit(Loki, Thor);

// console.log('//////////////////////////')
// console.log('####### FIGHT #######')

// training.fight();
// console.log('//////////////////////////')
// training.actualStatus();
// training.whoWins();
// console.log('//////////////////////////')
