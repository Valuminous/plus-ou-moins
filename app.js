const random = Math.round(Math.random() * 100);
const myButton = document.querySelector('.btn');
var input = document.querySelector('#answer');
var i = 0;

myButton.addEventListener('click', (event) => {
    i++;
    console.log(random);
    console.log(myButton);
    console.log(i);
    console.log(input);
    if (input.value == random) {
        alert("Bravo");
        input.value="";
    } else if (input.value < random) {
        alert("plus");
        input.value="";
    } else if (input.value > random) {
        alert("moins");
        input.value="";
    }
     if (i == 4) {
         alert("salut");
         i=0;
     }
})