const container = document.querySelector(".childContainer");
const data = [
  {
    question:"Who is the president of united state",
    option1: "Braack Obama",
    option2:"Donald Trump",
    option3:"Bill Clinton",
    option4:"Joe Biden",
    correct:"Joe Biden"
  },
  {
    question:"Who is the prime minister of india",
    option1: "Narendra Modi",
    option2:"Donald Trump",
    option3:"Bill Clinton",
    option4:"Joe Biden",
    correct:"Narendra Modi"
  }
];

let contentCount = 0;

function htmlInsert(){
  const html1 = `
    <div class="content">
    <h2 class="question">${data[contentCount].question}</h2>

    <ul class="answersList">
        <li>
            <input type="radio" id="option1" data-option="1" name="option">
            <label for="option1">${data[contentCount].option1}</label>
        </li>
        <li>
            <input type="radio" id="option2" data-option="2" name="option">
            <label for="option2">${data[contentCount].option2}</label>
        </li>
        <li>
            <input type="radio" id="option3" data-option="3" name="option">
            <label for="option3">${data[contentCount].option3}</label>
        </li>
        <li>
            <input type="radio" id="option4" data-option="4" name="option">
            <label for="option4">${data[contentCount].option4}</label>
        </li>
    </ul>
    </div>
    <div>
      <button class="submitBtn">Submit</button>
    </div>
`
container.innerHTML = html1;
};

htmlInsert();

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click",()=>{
  if(contentCount>data.length){
    contentCount=0;
    htmlInsert();
  }
  else{
    contentCount++;
    htmlInsert();
  }
  console.log(contentCount)
})
