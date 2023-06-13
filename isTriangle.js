const angleInputs = document.querySelectorAll('.inputs');
const btn = document.querySelector('#check-btn');
const output = document.querySelector('#output-div');

btn.addEventListener('click', () => {
    const angle1 = Number(angleInputs[0].value);
    const angle2 = Number(angleInputs[1].value);
    const angle3 = Number(angleInputs[2].value);
    const sum = calculateSum(angle1, angle2, angle3);
    if (sum === 180) {
        output.innerText = 'Yay! This makes a Triangle 📐';
    } else {
        output.innerText = 'Oh! This does not makes a Triangle 📐';
    }


});

function calculateSum(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}