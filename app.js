let random = randomNumber(0, 100);
const myButton = document.querySelector('#btn');
const message = document.querySelector('#message');
const essais = document.querySelector("#essais");
const input = document.querySelector('#answer');
const myReset = document.querySelector('#reset');
const answer1 = document.querySelector('#answer1');
const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');
const answer8 = document.querySelector('#answer8');
const answer9 = document.querySelector('#answer9');
const answer10 = document.querySelector('#answer10');





let i = 0;
let regex = /^\d+$/;

window.onload = () => {
    input.focus();
}


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


hard.addEventListener('click', (event) => {
    jeuHard();
})

normal.addEventListener('click', (event) => {
    jeuNormal();
})

easy.addEventListener('click', (event) => {
    jeuEasy();
})



function jeuHard() {


    myButton.addEventListener('click', (event) => {
        jeu();
    })


    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            jeu();
        }
    })

    function jeu() {
        i++;
        if (regex.test(input.value)) {} else {
            swal("Ce n'est pas un nombre valide");
            i--;
            input.value = message.innerHTML = "";
        }
        console.log(random);
        console.log(i);
  
        if (input.value == random) {
            swal("Bravo !!");
            input.value = message.innerHTML = essais.innerHTML = "";
            i = 0;
            random = randomNumber(0, 100);
            input.focus();

        } else if (input.value < random) {
            message.innerHTML = ("C'est plus !");
            input.value = "";
            essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
            if (i == 9) {
                essais.innerHTML = ("Il ne te reste plus qu'un essai.");
            }
        } else if (input.value > random) {
            message.innerHTML = ("C'est moins !");
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
            random = randomNumber(0, 100);
        }
    }
}
myReset.addEventListener('click', (event) => {
    window.location.reload();
})

function jeuNormal() {


    myButton.addEventListener('click', (event) => {
        jeuN();
    })


    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            jeuN();
        }
    })

    function jeuN() {
        i++;
        if (regex.test(input.value)) {} else {
            swal("Ce n'est pas un nombre valide");
            i--;
            input.value = message.innerHTML = "";
        }
        console.log(random);
        console.log(i);
   
        if (input.value == random) {
            swal("Bravo !!");
            input.value = message.innerHTML = essais.innerHTML = "";
            i = 0;
            random = randomNumber(0, 100);
            input.focus();

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
            random = randomNumber(0, 100);
        }
    }
}


function jeuEasy() {


    myButton.addEventListener('click', (event) => {
        jeuE();
    })


    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            jeuE();
        }
    })

    function jeuE() {
        i++;
        if (regex.test(input.value)) {} else {
            alert("Ce n'est pas un nombre valide");
            i--;
            input.value = message.innerHTML = "";
        }
        console.log(random);
        console.log(i);
        if (input.value == random) {
            swal("Bravo !!");
            input.value = message.innerHTML = essais.innerHTML = "";
            i = 0;
            random = randomNumber(0, 100);
            input.focus();

        } else if (input.value < random) {
            message.innerHTML = ("C'est plus de " + input.value + "!");
            if (i == 1) {
                answer1.innerHTML = input.value;
            }
            if (i == 2) {
                answer2.innerHTML = input.value;
            }
            if (i == 3) {
                answer3.innerHTML = input.value;
            }
            if (i == 4) {
                answer4.innerHTML = input.value;
            }
            if (i == 5) {
                answer5.innerHTML = input.value;
            }
            if (i == 6) {
                answer6.innerHTML = input.value;
            }
            if (i == 7) {
                answer7.innerHTML = input.value;
            }
            if (i == 8) {
                answer8.innerHTML = input.value;
            }
            if (i == 9) {
                answer9.innerHTML = input.value;
            }
            if (i == 10) {
                answer10.innerHTML = input.value;
            }
            input.value = "";
            essais.innerHTML = ("Il te reste encore " + [10 - i] + " essais.");
            if (i == 9) {
                essais.innerHTML = ("Il ne te reste plus qu'un essai.");
            }
        } else if (input.value > random) {
            message.innerHTML = ("C'est moins de " + input.value + "!");
            if (i == 1) {
                answer1.innerHTML = input.value;
            }
            if (i == 2) {
                answer2.innerHTML = input.value;
            }
            if (i == 3) {
                answer3.innerHTML = input.value;
            }
            if (i == 4) {
                answer4.innerHTML = input.value;
            }
            if (i == 5) {
                answer5.innerHTML = input.value;
            }
            if (i == 6) {
                answer6.innerHTML = input.value;
            }
            if (i == 7) {
                answer7.innerHTML = input.value;
            }
            if (i == 8) {
                answer8.innerHTML = input.value;
            }
            if (i == 9) {
                answer9.innerHTML = input.value;
            }
            if (i == 10) {
                answer10.innerHTML = input.value;
            }
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
            random = randomNumber(0, 100);
        }
    }
}