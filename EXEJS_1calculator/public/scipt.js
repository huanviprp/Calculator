myTimer();
let myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}


const calbtn = document.querySelectorAll(".cal-btn");
const operation = document.querySelector('#operation');
const result = document.querySelector('#result')
for (let i = 0; i < calbtn.length; i++) {
    calbtn[i].addEventListener('click', e => {
        if (e.currentTarget.innerHTML != 'Enter' && e.currentTarget.innerHTML != 'C') {
            operation.innerHTML += e.currentTarget.innerHTML;
        } else if (e.currentTarget.innerHTML == 'Enter') {
            result.innerHTML = eval(operation.innerHTML);
        } else {
            operation.innerHTML = '';
            result.innerHTML = '';
        }
    })
};
