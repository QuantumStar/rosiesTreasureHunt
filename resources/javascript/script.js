window.confirm('Hello Rosie, Skye brought you a present from the Paw Patrol for helping them rescue so many friends, but the sneaky raccoons have hidden it! There are ten clues, hidden on ten stars around the ranch. can you find all of the Stars and solve my treasure hunt?');

var codes = ['1200', '130', '600', '345', '747', '1130', '1000', '530', '215', '300'];
var snd = new Audio('./resources/sounds/OOT_Secret.wav');


document.querySelector('.starOne').addEventListener('click', starOneClick);
function starOneClick() {
  codeVerify(0);
}

document.querySelector('.starTwo').addEventListener('click', starTwoClick);
function starTwoClick() {
  codeVerify(1);
}

document.querySelector('.starThree').addEventListener('click', starThreeClick);
function starThreeClick() {
  codeVerify(2);
}

document.querySelector('.starFour').addEventListener('click', starFourClick);
function starFourClick() {
  codeVerify(3);
}

document.querySelector('.starFive').addEventListener('click', starFiveClick);
function starFiveClick() {
  codeVerify(4);
}

document.querySelector('.starSix').addEventListener('click', starSixClick);
function starSixClick() {
  codeVerify(5);
}

document.querySelector('.starSeven').addEventListener('click', starSevenClick);
function starSevenClick() {
  codeVerify(6);
}

document.querySelector('.starEight').addEventListener('click', starEightClick);
function starEightClick() {
  codeVerify(7);
}

document.querySelector('.starNine').addEventListener('click', starNineClick);
function starNineClick() {
  codeVerify(8);
}

document.querySelector('.starTen').addEventListener('click', starTenClick);
function starTenClick() {
  codeVerify(9);
}

function codeVerify(starNumber) {
  if (starNumber == 0) {
    var codeOne = prompt('I see you\'ve found the first star! This one was easy, but the next ones will be trickier! Enter the time shown on the back of each Star for the next clue. You can enter the first time in the box below.');
    if (codeOne == codes[0] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starOne').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/2.jpg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 1) {
    var codeOne = prompt('You\'ve found the second star, way to go! There are eight left to find, and when you find all ten, the location of the treasure will be revealed.');
    if (codeOne == codes[1] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starTwo').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/3.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 2) {
    var codeOne = prompt('It looks like those sneaky raccoons hid a clue in the \'sleeping garden\'. Maybe some day, a Princess will come and plant flowers here, and the garden will wake up again. Enter the time shown on the third star, and the location of the fourth will be revealed.');
    if (codeOne == codes[2] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starThree').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/4.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 3) {
    var codeOne = prompt('Yay, you found star number four! It looks like those sneaky raccoons were in here playing music again. They love to dance and play the drums when everyone is sleeping. Enter the time, and we will see where the raccons went next.');
    if (codeOne == codes[3] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starFour').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/5.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 4) {
    var codeOne = prompt('Great job, you\'ve found the fifth star, that means you\'re half way to the treasure! It looks like the raccoons are headed down the driveway, I wonder where they\'ve hidden the sixth star? Enter the time to reveal the next location.');
    if (codeOne == codes[4] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starFive').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/6.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 5) {
    var codeOne = prompt('Those sneaky raccoons must have been playing in the barn! Your Grandpa wrote an interesting poem here, maybe it\'s about you? Only a few stars left to find, let\'s enter the code and find the next clue!');
    if (codeOne == codes[5] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starSix').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/7.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 6) {
    var codeOne = prompt('The raccoons were even playing in the wagon! You\'re getting closer to the treasure, what could it be? I wonder what Skye and the Paw Patrol brought you for all of your help saving their friends?');
    if (codeOne == codes[6] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starSeven').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/8.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 7) {
    var codeOne = prompt('What a tricky maze! I hope you\'re not dizzy from walking in circles! Your Grandpa built this maze for your Grandma a long time ago. It\'s nice to walk here and think about them. Let\'s enter the code, then walk carefully back out to find the next clue!');
    if (codeOne == codes[7] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starEight').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/9.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 8) {
    var codeOne = prompt('Near the top of the old stone steps, you\'ve found the ninth clue! You\'re getting so close, only one star left to find. Where do you suppose those sneaky raccoons went next..? Type in the star code, and we\'ll find the last clue!');
    if (codeOne == codes[8] || codeOne == 9999) {
      snd.play();
      window.confirm('Well done, you\'ve entered the correct time! You\'re one step closer to the treasure. Here is a clue that will help you find the next Star.');
      document.querySelector('.starNine').style.backgroundImage = "url('./resources/images/star-icon.png')";
      document.querySelector('img').style.backgroundImage = "url('./resources/images/10.jpeg')";
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
  else if (starNumber == 9) {
    var codeOne = prompt('This is it, the very last star! It\'s been such an adventure, and I\'m so proud of my smart little girl. You\'ve solved all of the puzzles, and once you enter the final code, the location of your treasure will be revealed! I love you so much, and I\'m so glad I get to be your Daddy Bear.');
    if (codeOne == codes[9] || codeOne == 9999) {
      snd.play();
      document.querySelector('.starTen').style.backgroundImage = "url('./resources/images/star-icon.png')";
      window.confirm('Well done, you\'ve won the treasure hunt!');
      window.open("winner.html", "_blank");
    }
    else {
      window.confirm('That doesn\'t look quite right, try again!');
    }
  }
}
