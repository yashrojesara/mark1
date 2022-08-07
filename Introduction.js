const readline = require("readline-sync");

let score = 0;

const start = () => {
  console.log(`${"How well do you know me?"}`);
  console.log("----");

  const guestName = readline.question("Please Enter Your Name: ");
  console.log(`${"Welcome: "}${guestName}`);
};

const playQuiz = () => {
  const questionArray = [
    { id: 0, question: `What's My Name? -`, ans: "Yash" },
    { id: 1, question: "How old I am? -", ans: "25" },
    { id: 2, question: "Where Am I from? -", ans: "Botad" },
    { id: 3, question: "Which color I like? -", ans: "Black" },
    {
      id: 4,
      question: "Which year did I completed my gradution? -",
      ans: "2019",
    },
  ];

  questionArray.forEach((ques) => {
    const answer = readline.question(ques.question);
    if (answer.toLowerCase() === ques.ans.toLowerCase()) {
      console.log("RIGHT!");
      score += 1;
    } else {
      console.log("WRONG!!!");
    }

    console.log(`${"Your Score Is: "}${score}`);
    console.log("----");
  });
};

const showScoreCard = () => {
  const scoreCard = [
    {
      name: "Yash",
      score: 2,
    },
    {
      name: "Soni",
      score: 1,
    },
  ];

  console.log(`${"LeaderBoard: "}`);

  scoreCard.forEach((item) => {
    console.log(`${item.name}: ${item.score}`);
    console.log("----");
  });
  console.log(`${"Your Score: "}${score}`);
};

start();
console.log("-----------");
playQuiz();
console.log("-----------");
showScoreCard();
