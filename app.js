const random = Math.round(Math.random() * 100);
const myButton = document.querySelector('.btn');
var input = document.querySelector('#answer');
var str = "";

myButton.addEventListener('click', (event) => {
    console.log(myButton);
    console.log(random);
    console.log(input.value);
    console.log(i);
    if (input.value == random) {
        alert("Bravo");
    } else if (input.value < random) {
        alert("plus");
    } else if (input.value > random) {
        alert("moins");
    }
    for (var i = 0; i < 9; i++) {
        str = str + i;
        alert("fini");
    }
})