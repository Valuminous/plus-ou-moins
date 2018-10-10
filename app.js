const random = Math.floor(Math.random() * 100);
const myButton = document.querySelector('#btn');
var message = document.querySelector('#message');
var essais = document.querySelector("#essais");
var input = document.querySelector('#answer');
var i = 0;
var regex = /^\d+$/;

input.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("#btn").click();
    }
})
myButton.addEventListener('click', (event) => {
    i++;
if (regex.test(input.value)) {} else {
    swal("Ce n'est pas un nombre valide");
    i--;
    input.value = message = "";
}
console.log(random); console.log(myButton); console.log(i); console.log(input);
if (input.value == random) {
    swal("Bravo !!");
    input.value = message.innerHTML = essais.innerHTML = "";
    i = 0;
} else if (input.value < random) {
    message.innerHTML = ("C'est plus de " + input.value + "!");
    input.value = "";
    essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
    if (i == 9) {
        essais.innerHTML = ("Il ne te reste plus qu'un essai.");
    }
} else if (input.value > random) {
    message.innerHTML = ("C'est moins de " + input.value + "!");
    input.value = "";
    essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
    if (i == 9) {
        essais.innerHTML = ("Il ne te reste plus qu'un essai.");
    }
}
if (i == 10) {
    swal("Perdu !!");
    input.value = message.innerHTML = essais.innerHTML = "";
    i = 0;
}
})