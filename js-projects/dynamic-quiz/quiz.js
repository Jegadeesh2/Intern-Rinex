$(document).ready(function () {
  let questions = [
    {
      question: "What is the largest desert in the world?",
      choices: [
        "Sahara Desert",
        "Gobi Desert",
        "Atacama Desert",
        "Arabian Desert",
        "Antarctica",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the largest ocean in the world?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
        "Southern Ocean",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is the largest mammal in the world?",
      choices: [
        "African Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus",
        "Rhinoceros",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      choices: ["Earth", "Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      question: "What is 0 * 8?",
      choices: [0, 8, 80, 10, 20],
      correctAnswer: 0,
    },
  ];

  let questionCounter = 0;
  let selections = [];
  let quiz = $("#quiz");
  let next = $("#next");
  let prev = $("#prev");
  let start = $("#start");

  displayNext();

  next.on("click", function (e) {
    e.preventDefault();

    choose();

    if (!selections[questionCounter]) {
      alert("Please make a selection!");
    } else {
      questionCounter++;
      displayNext();
    }
  });

  prev.on("click", function (e) {
    e.preventDefault();
    choose();
    questionCounter--;
    displayNext();
  });

  start.on("click", function (e) {
    e.preventDefault();
    questionCounter = 0;
    selections = [];
    displayNext();
    start.hide();
    $("#scoreDiv").remove();
  });

  function createQuestionElement(index) {
    let questionEle = $("<div>", { id: "question" });

    let header = $("<h2>Question " + (index + 1) + ":</h2>");
    questionEle.append(header);

    let question = $("<p>").append(questions[index].question);
    questionEle.append(question);

    let radioButtons = createRadiosBtns(index);
    questionEle.append(radioButtons);

    return questionEle;
  }

  function createRadiosBtns(index) {
    let radioList = $("<ul>");
    let answerListEle;
    let input = "";
    for (let i = 0; i < questions[index].choices.length; i++) {
      answerListEle = $("<li>");
      input = `<input type="radio" name="answer" value=${i} />`;
      input += questions[index].choices[i];
      answerListEle.append(input);
      radioList.append(answerListEle);
    }
    return radioList;
  }

  function choose() {
    selections[questionCounter] = $('input[name="answer"]:checked').val();
  }

  function displayNext() {
    quiz.fadeOut(500, function () {
      $("#question").remove();
      if (questionCounter < questions.length) {
        let nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn(500);
        console.log(selections[questionCounter]);

        if (selections[questionCounter] != "") {
          $("input[value=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }

        if (questionCounter === 1) {
          prev.show();
        } else if (questionCounter === 0) {
          prev.hide();
          next.show();
        }
      } else {
        let scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        next.hide();
        prev.hide();
        start.show();
      }
    });
  }
  function displayScore() {
    let score = $("<div>", { id: "scoreDiv" });
    let numCorrect = 0;
    for (let i = 0; i < selections.length; i++) {
      if (selections[i] == questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    if (numCorrect === 5) {
      score.css("color", "rgb(0,255,0)");
      score.append(
        "Well done🎉, You got " +
          numCorrect +
          " questions out of " +
          questions.length +
          " right !"
      );
    } else if (numCorrect === 1 || numCorrect === 0) {
      score.css("color", "rgb(255, 30, 30)");
      score.append(
        "Sorry😔, You got " +
          numCorrect +
          " question out of " +
          questions.length +
          " right !"
      );
    } else {
      score.css("color", "rgb(255, 30, 30)");
      score.append(
        "Good👍, You got " +
          numCorrect +
          " questions out of " +
          questions.length +
          " right !"
      );
    }
    return score;
  }
});
