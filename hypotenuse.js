const inputs = document.querySelectorAll('.sides');
const checkBtn = document.querySelector('#check-btn');
const output = document.querySelector('#output-div');

checkBtn.addEventListener('click',() => {
    const base = Number(inputs[0].value);
    const perpendicular = Number(inputs[1].value);
    const hypotenuse = calculateHypotenuse(base,perpendicular);
    output.style.display = "block";
    output.innerText = "Hypotenuse = " + hypotenuse + " cm";

});

function calculateHypotenuse(base,perpendicular){
    const ans = Math.sqrt(base*base + perpendicular*perpendicular);
    return ans;
}