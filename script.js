let numberContainer = document.querySelector('.numberContainer');
let number = document.createElement('h1');
number.classList.add('number');
number.innerHTML = '0';
// console.log(counter);
numberContainer.appendChild(number);

function incrr(){
    let incValue = parseInt(number.innerHTML)+1;
    number.innerHTML = incValue;
    numberContainer.appendChild(number);
}

function decrr(){
    let incValue = parseInt(number.innerHTML)-1;
    number.innerHTML = incValue;
    numberContainer.appendChild(number);
}

function resett(){
    number.innerHTML = '0';
    numberContainer.appendChild(number);
}