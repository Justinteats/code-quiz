console.dir(window.document);
window.document.querySelector("button");
var btn = window.document.querySelector("button");
console.dir(btn);
document.querySelector(".btn");
document.querySelector("button").textContent;
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });
var counter = 15
var countdown =function () {
    console.log(counter);
    counter--;
    if(counter === 0){
        clearInterval(startCountdown);
    };
};
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