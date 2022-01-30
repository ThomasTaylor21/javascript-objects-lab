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

prevGuesses: [], {
  function multiplyArray(numArray) {
    let numArrayProduct = 1;
    for (let i = 0; i < numArray.length; i++) {
      numArrayProduct *= numArray[i];
    }
    return numArrayProduct;
  
  
  
  for 
// generate each for loop 