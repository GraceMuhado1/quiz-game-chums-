function Question(question, answer1, answer2, answer3, answer4, rightAnswerIndex, ) {

    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.rightAnswerindex = rightAnswerIndex;
  
  }
  
  function Quiz() {
    this.questions = [];
    this.questionsIndex = 0;
    this.score = 0;
    this.gameOver = false;
  }
  
  
  
  //   var images = {
  //     "1"  : "https://via.placeholder.com/200x50?text=CSS",
  
  //   }  
  Quiz.prototype.add = function (question) {
    this.questions.push(question);
  };
  
  Quiz.prototype.answer = function (buttonIndex) {
    if (this.questionsIndex === this.questions.length - 1) {
  
  
      this.gameOver = true;
    }
   
    
    // if (this.questions > 3) {
  
  
    //   $("#choice3").hide();
    // }
   
  
    if (buttonIndex === this.questions[this.questionsIndex].rightAnswerindex) {
      console.log('correct');
      $("#modalCart").modal()
  
      this.score++;
    }
  
    if (buttonIndex != this.questions[this.questionsIndex].rightAnswerindex) {
      console.log('wrong');
  
      $("#modalPush").modal()
  
    }
  
    this.questionsIndex++;
  
  }
  
  var retryButton = '<div class="text-center mb-3 q-start" ><button class="btn bg-btn retry_btn btn-block btn-rounded z-depth-1a" value="Refresh Page" onClick="history.go(0)">Retry Quiz</button></div>';
  
  
  Quiz.prototype.renderInElement = function (quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement) {
    questionElement.innerHTML = "";
    choice0Element.innerHTML = "";
    choice1Element.innerHTML = "";
    choice2Element.innerHTML = "";
    choice3Element.innerHTML = "";
    progressElement.innerHTML = "";
    if (this.gameOver === true) {
      quizElement.innerHTML = "";
      quizElement.innerHTML += '<h1>Quiz Over</h1>';
      quizElement.innerHTML += "<h2 id='question' class='headline-secondary--grouped'>Your score is: " + this.score + " out of " + this.questions.length;
      quizElement.innerHTML += retryButton;
    } else {
      questionElement.innerHTML += this.questions[this.questionsIndex].question;
      choice0Element.innerHTML += this.questions[this.questionsIndex].answer1;
      choice1Element.innerHTML += this.questions[this.questionsIndex].answer2;
      choice2Element.innerHTML += this.questions[this.questionsIndex].answer3;
      choice3Element.innerHTML += this.questions[this.questionsIndex].answer4;
      //   choice1Element.innerHTML += this.questions[this.questionsIndex].wrongAnswerindex;
      progressElement.innerHTML += " " + (this.questionsIndex + 1) + " of " + this.questions.length;
  
  
      
    }
  
  
  
  
  };
  
  
  
  
  var quiz = new Quiz();
  
  
  
  
  var question1 = new Question(" <a class = 'chums_question'>What is the perfect example of broadcast picture?</a>",
  "<img src='img/chums/q1/a.png'  class = 'choice-img'  /> <button  class='btn btn-danger btn-rounded guess0 '>A</button> ", 
   "<img src='img/chums/q1/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess1 '>B</button>",
   "<img src='img/chums/q1/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
   "<img src='img/chums/q1/d.png'  class = 'choice-img' /> <button  class='btn btn-danger btn-rounded guess3'>D</button>", 1);
  
   
  var question2 = new Question(" <a class = 'chums_question'>Where do we go to join clan?</a>",
  "<img src='img/chums/q2/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0'>A</button> ", 
   "<img src='img/chums/q2/b.png'   class = 'choice-img'/><button  class='btn btn-danger btn-rounded guess1'>B</button>",
   "<img src='img/chums/q2/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
   "<img src='img/chums/q2/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 3);
  
   var question3 = new Question(" <a class = 'chums_question'>How to top up? Select possible answers</a>",
   "<img src='img/chums/q3/a.png'  class = 'choice-img' /> <button  class='btn btn-danger btn-rounded guess0'>A</button>", 
    "<img src='img/chums/q3/b.png'   class = 'choice-img'/><button  class='btn btn-danger btn-rounded guess1'>B</button>",
    "<img src='img/chums/q3/c.png'   class = 'choice-img'/><button  class='btn btn-danger btn-rounded guess2'>C</button>",
    "<img src='img/chums/q3/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 3);
  
     var question4 = new Question(" <a class = 'chums_question'>Where to go to check the hours and gems earned?</a>",
     "<img src='img/chums/q4/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0 '>A</button> ", 
      "<img src='img/chums/q4/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded  guess1'>B</button>",
      "<img src='img/chums/q4/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
      "", 0);
  
      var question5 = new Question(" <a class = 'chums_question'>Where to see the Ranking?</a>",
      "<img src='img/chums/q5/a.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess0 '>A</button>", 
       "<img src='img/chums/q5/b.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded  guess1'>B</button>",
       "<img src='img/chums/q5/c.png'   class = 'choice-img'/> <button  class='btn btn-danger btn-rounded guess2'>C</button>",
       "<img src='img/chums/q5/d.png'  class = 'choice-img' /><button  class='btn btn-danger btn-rounded guess3 '>D</button>", 0);
  
       var question6 = new Question(" <a class = 'chums_question'>Chums is the 3rd live broadcasting company.</a>",
       "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
        "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
        "",
        "", 1);
        var question7 = new Question(" <a class = 'chums_question'>Chums is only for Filipinos and Philippines.</a>",
       "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
        "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
        "",
        "", 1);
        var question8 = new Question(" <a class = 'chums_question'>Governor is the highest VIP Privilege.</a>",
       "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
        "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
        "",
        "", 1);
        var question9 = new Question(" <a class = 'chums_question'>Our live broadcast is only around 11pm to 7am.</a>",
        "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
         "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
         "",
         "", 1);
         var question10 = new Question(" <a class = 'chums_question'>Using Lazy pod is an option</a>",
         "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
          "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
          "",
          "", 0);
          var question11 = new Question(" <a class = 'chums_question'>We need to earn 100k gems to acquire a kiss mark badge</a>",
         "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
          "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
          "",
          "", 0);
     
           var question12 = new Question(" <a class = 'chums_question'>Chums live is monitored 24/7</a>",
          "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
           "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
           "",
           "", 0);
           var question13 = new Question(" <a class = 'chums_question'>We can wear any attire in our live broadcast</a>",
           "<button  class='btn btn-danger btn-rounded guess0 '>TRUE</button>", 
            "<button  class='btn btn-danger btn-rounded guess1 '>FALSE</button>",
            "",
            "", 0);
   
   
  
  
  
  quiz.add(question1);
  quiz.add(question2);
  quiz.add(question3);
  quiz.add(question4);
  quiz.add(question5);
  quiz.add(question6);
  quiz.add(question7);
  quiz.add(question8);
  quiz.add(question9);
  quiz.add(question10);
  quiz.add(question11);

  quiz.add(question12);
  quiz.add(question13);
  
  
  
  var quizElement = document.getElementById("quiz");
  var headingElement = document.getElementById("heading");
  var questionElement = document.getElementById("question");
  var choice0Element = document.getElementById("choice0");
  var choice1Element = document.getElementById("choice1");
  var choice2Element = document.getElementById("choice2");
  var choice3Element = document.getElementById("choice3");
  var progressElement = document.getElementById("progress");
  var resultElement = document.getElementById("pop");
  
  quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);
  
  //   var answer1Button = document.getElementById("guess0");
  //   answer1Button.onclick = function () {
  //     quiz.answer(0);
  //     quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, progressElement);
  
  
  // };
  
  // var answer2Button = document.getElementByClassName("guess0");
  // answer2Button.onclick = function () {
  //   quiz.answer(1);
  //   quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, progressElement);
  // };
  
  $("#choice0").click(function () {
  
    quiz.answer(0);
    quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element,choice2Element, choice3Element, progressElement);
  
  });
  
  
  $("#choice1").click(function () {
    quiz.answer(1);
    quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);
  });
  
  
  $("#choice2").click(function () {
  
    quiz.answer(2);
    quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);
  
  });
  
  
  $("#choice3").click(function () {
    quiz.answer(3);
    quiz.renderInElement(quizElement, headingElement, questionElement, choice0Element, choice1Element, choice2Element, choice3Element, progressElement);
  });
  
  $(".quiz-card").hide();
  
  $(document).ready(function(){
   
    $(".show-quiz").click(function(){
      $(".quiz-card").show();
      $(".start-quiz").hide();
    });
  
   
  
  });
