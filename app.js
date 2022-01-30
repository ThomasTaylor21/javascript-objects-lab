console.log("I am here now")


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
do {
  guesses = this.getGuess();
  // if (isNaN(guesses) === false);
  console.log(guesses);
  //this calls the getGuess function and saves it as a variable, guesses
  this.prevGuesses.push(guesses);
  console.log(this.prevGuesses);
  this.render();
  //this pops it into the prevGuesses array
}

    console.log(prevGuesses);
  // const play = function () {
  //   if (this.biggestNum - this.smallestNum + 1)) + this.smallestNum);{
  //     return this.secretNum;
  
  // };
  //   console.log("game");
  
  

// // generate each for loop }