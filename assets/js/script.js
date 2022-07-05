var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var count = 60;
var counter = 15

  var startCountdown = setInterval(countdown, 15000);

  //questions with choices and answers pulled from "https://www.includehelp.com/mcq/javascript-multiple-choice-questions-mcqs.aspx"
  const questions = [{

    question: "Which type of JavaScript language is ___:",
    choice: {
        a: "Object-oriented",
        b: "Object-based",
        c: "Functional programming",
        d: "All of the Above",
        answer: "Object-based"
    },
    question: "Which JS method is used to access an Html element by Id",
    choice: {
        a: "getElementById()",
        b: "getElement(id)",
        c: "getElementById(id)",
        d: "elementById(id)",
    answer: "getElementById(id)"
    },
    question: "Which JS method is used to write on browsers console",
    choice: {
        a: "console.write()",
        b: "console.output()",
        c: "console.log()",
        d: "console.writeHTML()",
    answer: "console.log()"
    },
    question: "Which JS method is used to write into an alert box",
    choice: {
        a: "window.alertHTML()",
        b: "window.alert()",
        c: "window.alertBox()",
        d: "window.alertContent()",
    answer: "window.alert()",
    },
    question: "In JS a single line comment starts with __.",
    choice: {
        a: "#",
        b: "/*",
        c: "$",
        d: "//",
    answer: "//",
    },

    

  }];

  // start button
  startButton.addEventListener('click', () => {
    startGame()
    startTimer()
  })
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
function startTimer() 
    var interval = setInterval(function() {
        document.getElementById('time-display').innerHTML=count;
        count--;
        if (count < 0){
            clearInterval(interval);
            alert('no more time left');
      }
    })

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
  }
  
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      var button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
   
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })

    if(!correct){
      count -= 5
      document.getElementById('time-display').innerHTML=count;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  