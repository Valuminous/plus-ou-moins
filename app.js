let random = randomNumber(0, 100);
const myButton = document.querySelector('#btn');
const message = document.querySelector('#message');
const essais = document.querySelector("#essais");
const input = document.querySelector('#answer');
const myReset = document.querySelector('#reset');
const answer1 = document.querySelector('#answer1');

let i = 0;
let regex = /^\d+$/;


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        jeu();
    }
})


myButton.addEventListener('click', (event) => {
    jeu();
})

function jeu() {
    i++;
    if (regex.test(input.value)) {} else {
        swal("Ce n'est pas un nombre valide");
        i--;
        input.value = message = "";
    }
    console.log(random);
    console.log(myButton);
    console.log(i);
    console.log(input);
    console.log(answer1);
    if (input.value == random) {
        swal("Bravo !!");
        input.value = message.innerHTML = essais.innerHTML = "";
        i = 0;
        random = randomNumber(0, 100);
    } else if (input.value < random) {
        message.innerHTML = ("C'est plus de " + input.value + "!");
        answer1.innerHTML = (input.value);
        input.value = "";
        essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
        if (i == 9) {
            essais.innerHTML = ("Il ne te reste plus qu'un essai.");
        }
    } else if (input.value > random) {
        message.innerHTML = ("C'est moins de " + input.value + "!");
        input.value = "";
        essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
        answer1.innerHTML = (input.value);
        if (i == 9) {
            essais.innerHTML = ("Il ne te reste plus qu'un essai.");
        }
    }
    if (i == 10) {
        swal("Perdu !!");
        input.value = message.innerHTML = essais.innerHTML = "";
        i = 0;
        random = randomNumber(0, 100);
    }


    // function saveInput(input) {
    //     if (input) {
    //         if (s(".essais span").innerHTML != "0") {
    //             s(".used span").innerHTML = s(".used span").innerHTML + ", " + input;
    //         } else {
    //             s(".used span").innerHTML = input;
    //         }
    //     }
    // }

}
myReset.addEventListener('click', (event) => {
    window.location.reload();
})