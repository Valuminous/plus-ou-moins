let randomN = randomNumber(0,100);
const myButton = document.querySelector('.btn');
const message = document.querySelector('#message');
const input = document.querySelector('#answer');
const myReset = document.querySelector('#reset');


let i = 0;

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  
const regex = /^\d+$/;

function pressEnter(event) {
    var code = eventkeyCode; //Selon le navigateur c'est which ou keyCode
    if (code == 13) { //le code de la touche Enter
        document.getElementById('answer').submit();
    }
}
window.onload = () => {
    input.focus();
}

myButton.addEventListener('click', (event) => {
    i++;

    if (regex.test(input.value)) {} else {
        swal("Ce n'est pas un nombre valide");
        i--;
        input.value = message = "";
    }
    console.log(randomN);
    console.log(myButton);
    console.log(i);
    console.log(input);
    if (input.value == randomN) {
        swal("Bravo !!");
        input.value = message.innerHTML = "";
        i = 0;
    } else if (input.value < randomN) {
        message.innerHTML = ("plus de " + input.value);
        input.value = "";
    } else if (input.value > randomN) {
        message.innerHTML = ("moins de " + input.value);
        input.value = "";
    }
    if (i == 3) {
        swal("Perdu !!");
        i = 0;
        input.value = message = "";
    }
})

myReset.addEventListener('click', (event) => {
    window.location.reload();
})
