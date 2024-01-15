const container = document.querySelector(".childContainer");
const data = [
  {
    question:"Who is the president of united state",
    a: "Braack Obama",
    b:"Donald Trump",
    c:"Bill Clinton",
    d:"Joe Biden",
    correct:"d"
  },
  {
    question:"Who is the prime minister of india",
    a: "Narendra Modi",
    b:"Donald Trump",
    c:"Bill Clinton",
    d:"Joe Biden",
    correct:"a"
  },
  {
    question:"Who is the president of india",
    a: "Narendra Modi",
    b:"Dropadi murmu",
    c:"Bill Clinton",
    d:"Joe Biden",
    correct:"b"
  },
];

const question = document.querySelector(".question");
const optionA = document.querySelector("#a_option");
const optionB = document.querySelector("#b_option");
const optionC = document.querySelector("#c_option");
const optionD = document.querySelector("#d_option");
const submitBtn = document.querySelector(".submitBtn");


let questionCount = 0;
updateQuestions();
function updateQuestions(){
    question.innerText = data[questionCount].question;
    optionA.innerText = data[questionCount].a;
    optionB.innerText = data[questionCount].b;
    optionC.innerText = data[questionCount].c;
    optionD.innerText = data[questionCount].d;
}

function reload(){
  submitBtn.innerText="Reload";
  window.location.reload();
}
submitBtn.addEventListener("click",()=>{
  if(questionCount<data.length-1){
    questionCount++;
    updateQuestions();
    console.log(questionCount);
  }
  else{
    questionCount=0;
    console.log(questionCount);
    updateQuestions();
  }
})