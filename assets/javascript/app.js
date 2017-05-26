//timer function to display 

setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

 var questions = [{
    question: "What was Kirk's name in episode 1?",
    choices: ["Mick", "John", "Sal", "Will"],
    correctAnswer: 0
  }, {
    question: "Which character did Lorelai not date?",
    choices: ["Alex", "Jason", "Luke", "Max", "Morty"],
    correctAnswer: 4
  }, {
    question: "What did Rory get arrested for?",
    choices: ["Drug paraphernalia", "Stealing a boat", "Breaking into the cafeteria", "Protesting human rights issues", "She never was arrested"],
    correctAnswer: 1
  }, {
    question: "What is the famed Huntzberger family business that Logan left?",
    choices: ["Farming business", "Staffing and consulting firm", "Real estate holdings", "Newspaper publishing", "Car sales"],
    correctAnswer: 3
  }, {
    question: "What is Luke's daughter's name?",
    choices: ["Paris", "Lane", "April", "Summer", "Anna"],
    correctAnswer: 2
  }];

  //for loop to go through the questions array


  