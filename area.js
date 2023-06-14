const inputs = document.querySelectorAll('.sides');
const checkBtn = document.querySelector('#check-btn');
const output = document.querySelector('#output-div');

checkBtn.addEventListener('click',() => {
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);
    const area = 1/2*(base*height);
    output.innerText = "Area of Triangle is " + area + " cm²"

});