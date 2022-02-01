console.log("I am here")



   
  console.log("test")

  const game = {
    title: 'Guess the Number!',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    prevGuesses:[],
  
    getGuess:function(){
      let guess
      while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
        
        guess = prompt(`guess a number between ${this.smallestNum}  and ${this.biggestNum}`)
        guess=parseInt(guess)
        console.log(guess);
      }
      return guess
    },
  
    play: function() {
      
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        console.log(this.secretNum);
      while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
          this.prevGuesses.push(this.getGuess())
          console.log(this.prevGuesses);
          if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
            this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
          }else{
            this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
          }
          this.render();
          
      }
    },
  
    render: function(){
      if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
        alert(`Congrats ${this.prevGuesses.length}`)
      }else{
        alert(`guess is too ${this.prevGuesses[this.prevGuesses.length-1] > this.secretNum ? 'high' : 'low'}. prev guesses ${this.prevGuesses}`)
      }
  
      // if(this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){      
      //   alert(`too low prevGuesses: ${this.prevGuesses.join(', ')}`)
      // }
      // if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){      
      //   alert(`too high prevGuesses: ${this.prevGuesses.join(', ')}`)
      // }
  
    }
  }
  game.play()
// note to GA Team......
// I have the following, mostly copied from the given possible solution. I have traied a few tweaks to help understand the concepts. Credit goes to GA (Ben's work)



// const game = {
//   title: "Guess the Number!",
//   biggestNum: null,
//   smallestNum: null,
//   secretNum: null,
//   // Initialize prevGuesses as an array
//   prevGuesses: [],
//   play: function () {
    
//     this.setRange()
//     // Get the secretNum from the range
//     this.secretNum =
//       Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
//       this.smallestNum;
//     // We want to run the game loop at least once, so a do...while loop works well here
//     do {
//       // Get the player's valid guess and push it into the prevGuesses array
//       this.prevGuesses.push(this.getGuess());
//       // BONUS: Call the resetRange method, reset the range after a guess is made
//       this.resetRange();
//       // Call the render method and render the result of the player's guess
//       this.render();
//       // If the player's last guess was not the secretNum, do it all again!
//     } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
//   },
//   getGuess: function () {
//     // initialize a guess variable
//     let guess;

//     do {
//       // Assign guess as an integer value parsed from the user's input to the prompt
//       guess = parseInt(
//         prompt(
//           `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
//         )
//       );
//     } while ( // While... 
//       isNaN(guess) || // the guess isn't a number or...
//       guess < this.smallestNum || // the guess is less than smallestNum or...
//       guess > this.biggestNum // the guess is greater than biggestNum
//     )

//     // After we have exited the loop return the guess
//     return guess;
//   },
//   setRange: function() {

//     do {
//       // Assign this.smallestNum as an integer value parsed from the user's input to the prompt
//       this.smallestNum = parseInt(
//         prompt(
//           `Enter a number - this will be the low end of the range.`
//         )
//       );
//     } while (isNaN(this.smallestNum)) //while this.smallestNum isn't a number

//     do {
//       // Assign this.highestNum as an integer value parsed from the user's input to the prompt
//       this.biggestNum = parseInt(
//         prompt(
//           `Enter a number that is ${this.smallestNum + 2} or more. This will be the high end of the range.`
//         )
//       );
//     } while ( // While... 
//       isNaN(this.biggestNum) || // this.highestNum isn't a number
//       this.biggestNum < this.smallestNum + 2 // this.highestNum isn't larger than this.smallestNum + 2 (to allow space for this.secretNum to exist) 
//     )
//   },
//   // BONUS
//   resetRange: function () {
//     // If the last number the player entered is more than secretNum
//     if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
//       // set the biggestNum equal to the player's last guess
//       this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
//     } else {
//       // otherwise set the smallestNum equal to the player's last guess
//       this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
//     }
//   },
//   render: function () {
//     // initialize a msg variable
//     let msg;

//     // If the player has guessed the secretNum..
//     if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
//       // Assign the victory message to the msg variable
//       msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${
//         this.prevGuesses.length > 1 ? "guesses" : "guess"
//       }!`;
//     } else {
//       // otherwise assign the too high/low message to the msg variable
//       msg = `Your guess is too ${
//         this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum
//           ? "high"
//           : "low"
//       }\nPrevious guesses: ${this.prevGuesses.join(", ")}`;
//     }

//     // show the message in an alert dialog box
//     alert(msg);
//   },
// };

// // call game.play and start the game!
// game.play();


// // const game = {
//   title: 'Guess the Number!',
//   biggestNum: 100,
//   smallestNum: 1,
//   secretNum: null,
//   play: function() {
//     this.secretNum = Math.floor(Math.random() * 
//       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//   }
// }
// // need to console log all
  
// console.log(this.secretNum[])

//     ## Tasks

// Completing the following tasks will result in a working *Guess the Number* game:

// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.







// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum].*
// Hint - use a template literal for the prompt message.
// 3. Ensure that the `getGuess` method returns a value that:
//     - Is a *number*, not a *string*.
//     - Is between `smallestNum` and `biggestNum`, inclusive.
//     - Hints:
//         - This is a great use case for a `while` loop.
//         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.