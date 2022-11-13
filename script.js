'use strict';
 
// demo of dom manupulation
/*
console.log(document.querySelector('.message').textContent ); 
document.querySelector('.message').textContent = '🎉 🎊 Correct Number ! '
console.log(document.querySelector('.message').textContent); 

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23 ;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message; 
} 



document.querySelector('.check').addEventListener('click', function () {
   let guess = Number (document.querySelector('.guess').value);
   console.log(guess, typeof guess); 


   //when there is no input
   if (!guess) {
      // document.querySelector('.message').textContent = 'No Number ! ⛔';
      displayMessage('No Number ! ⛔'); 
      score--;
      document.querySelector('.score').textContent = score;
   }

   //when player wins
   else if (guess === secretNumber)
   {
      // document.querySelector('.message').textContent = '🎉 Correct Number ! ';
      displayMessage('🎉 Correct Number ! '); 
      document.querySelector('body').style.backgroundImage =
        'linear-gradient(123deg, #7dde60, #5bd536d9, #1a6f00';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;   

      if (score > highScore)
      {
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
      }


   }//when guess is wrong
   else if (guess != secretNumber)
   { 
       if (score > 1) {
         // document.querySelector('.message').textContent =
         //    guess > secretNumber ? ' 📈 Too High !' : ' 📉 Too Low !';
          displayMessage(
            guess > secretNumber ? ' 📈 Too High !' : ' 📉 Too Low !'
          );
         score--;
         document.querySelector('.score').textContent = score;
       } else {
         // document.querySelector('.message').textContent =
         //   '💥 You lost the game ';
          displayMessage('💥 You lost the game ');
         document.querySelector('.score').textContent = 0;
       }
   }
      
   //when player guess is  is too high
   // else if (guess > secretNumber)
   // {
   //    if (score > 1) 
   //    {
   //       document.querySelector('.message').textContent = ' 📈 Too High !';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else
   //    {
   //       document.querySelector('.message').textContent = '💥 You lost the game ';
   //       document.querySelector('.score').textContent = 0;
   //    }
   // }
   
   //    //when player guess is too low 
   // else if (guess < secretNumber)
   // {
   // if (score > 1) {
   //    document.querySelector('.message').textContent = ' 📉 Too Low !';
   //    score--;
   //    document.querySelector('.score').textContent = score;
   // } else {
   //    document.querySelector('.message').textContent = '💥 You lost the game ';
   //    document.querySelector('.score').textContent = 0;
   // }
   // }

}

);

document.querySelector('.again').addEventListener('click', function () {
   //secretNumber = Math.trunc(Math.random() * 20) + 1; 
   score = 20;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.number').textContent = '?';
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.guess').value = '0';


});























