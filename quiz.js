const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#check-btn');
const outputDiv = document.querySelector('#output-div');
const ansArr = ["90°","right angled"];
submitBtn.addEventListener('click', () => {
   
    const formResult = new FormData(quizForm);
    let score = 0;
    let idx = 0;
    for(let value of formResult.values()){
        if(value === ansArr[idx]){
            score+=50;
        }
        idx++;

    }
    
    outputDiv.style.display = "block";
    outputDiv.innerText = "Your score is = " + score;
});