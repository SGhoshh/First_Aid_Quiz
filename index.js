//NeoG camp Level Zero Mark Two

//First Aid Quiz
/*Q1:What does DRAB stand for?
1.Danger,Response,Airway,Breathing **
2.Danger,Review,Airway,Breathing
3.Danger,Review,Airway,Bleeding
4.Danger,Response,Airway,Bleeding

Q2:What is the most effective way to stop bleeding?
1. Washing with water
2. Indirect Pressure
3. Elevation
4. Direct pressure **

Q3:How should you open an airway in an unconscious adult victim?
1.Tilt the head back & lift the chin **
2.Tilt the head to the side
3.Move the tongue with your fingers
4.Tilt the head forwards

Q4:What is the correct depth of chest compressions on an adult victim?
1.4-5cm
2.3-4cm
3.2-3cm
4.5-6cm **

Q5:A person is suddenly feeling dizzy, has trouble in speaking, swallowing,and blurring of vision, he is most likely experiencing
1. Cardiac Arrest
2. Stroke **
3. Heart Attack
4. Choking

Q6:What is the All in One Number for Emergency Services all over India
1. 100
2. 101
3. 131
4. 112 **
*/
var readLineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0

//function to welcome and explain the game
function welcome() {
  userName = readLineSync.question(chalk.yellowBright.bold("WELCOME!") + chalk.cyan("\nWhat is your name? "));
  console.log(chalk.greenBright("\nHI " + chalk.greenBright(userName)));
  console.log(chalk.greenBright("This is a quiz on some important knowledge of first-aid"));
  console.log(chalk.redBright("\nEach question has four options with only one correct \nEnter 1,2,3 or 4 key from your keyboard corresponding to your answer"));
}

//function to build the game layout
function layout(question, op1, op2, op3, op4, correctAnswer) {
  console.log(chalk.blueBright(question) + "\n" + chalk.magenta("1. " + op1 + "\n2. " + op2 + "\n3. " + op3 + "\n4. " + op4));
  var userAnswer = readLineSync.keyIn(chalk.cyan("Enter your answer "), { limit: [1, 2, 3, 4] });
  var check = gameLogic(userAnswer, correctAnswer)
  if (check == true) {
    console.log(chalk.green.bold("\u2713") + chalk.green(" Your Answer is correct"));
  }
  else {
    console.log("\u274C" + chalk.red(" Your answer is wrong\nThe correct option is " + correctAnswer));
  }
  console.log(chalk.yellowBright("Your current score is " + score));
}

//function to build the game logic
function gameLogic(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    score++
    return true;
  }
  else
    return false;
}

//function to access all the questions one by one
function play() {
  for (i = 0; i < questionList.length; i++) {
    layout(questionList[i].question, questionList[i].option1, questionList[i].option2, questionList[i].option3, questionList[i].option4, questionList[i].answer)
    console.log("\n\n");
  }
}

//function to display highscores and concluding message
function endGame() {
  console.log(chalk.greenBright("That was the last question\nThank you for playing the game\n\nHIGHSCORES"));
  highscores.map(score => console.log(chalk.blueBright(score.name + " --->  " + score.score)));
  console.log(chalk.blue("\nIf your name should be on Highscores then message me\nBYE BYE"));
}

var questionList = [
  {
    question: "What does DRAB stand for?",
    option1: "Danger,Response,Airway,Breathing",
    option2: "Danger,Review,Airway,Breathing",
    option3: "Danger,Review,Airway,Bleeding",
    option4: "Danger,Response,Airway,Bleeding",
    answer: 1
  },

  {
    question: "What is the most effective way to stop bleeding?",
    option1: "Washing with water",
    option2: "Indirect Pressure",
    option3: "Elevation",
    option4: "Direct pressure",
    answer: 4,
  },

  {
    question: "How should you open an airway in an unconscious adult victim?",
    option1: "Tilt the head back & lift the chin",
    option2: "Tilt the head to the side",
    option3: "Move the tongue with your fingers",
    option4: "Tilt the head forwards",
    answer: 1,
  },

  {
    question: "What is the correct depth of chest compressions on an adult victim?",
    option1: "4-5cm",
    option2: "3-4cm",
    option3: "2-3cm",
    option4: "5-6cm",
    answer: 4,
  },

  {
    question: "A person is suddenly feeling dizzy, has trouble in speaking, swallowing,and blurring of vision, he is most likely experiencing",
    option1: "Cardiac Arrest",
    option2: "Stroke",
    option3: "Heart Attack",
    option4: "Choking",
    answer: 2,
  },

  {
    question: "What is the All in One Number for Emergency Services all over India",
    option1: "100",
    option2: "101",
    option3: "131",
    option4: "112",
    answer: 4,
  }
]

//highscores
var highscores = [
  {
    name: "Ankit",
    score: 6,
  },
  {
    name: "Arijit",
    score: 5,
  }
]

welcome()
play()
endGame()