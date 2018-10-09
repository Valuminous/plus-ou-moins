const random = Math.round(Math.random() * 100);
const myButton = document.querySelector('.btn');
var input = document.querySelector('#answer');
var i = 0;

myButton.addEventListener('click', (event) => {
    // event.preventDefault();
    i++;
    console.log(i);
    if (input.value == random) {
        alert("Bravo");
    } 
    else if (input.value < random) {
        alert("plus");
    } 
    else if (input.value > random) {
        alert("moins");
    }
    if(i == 3){
        alert("perdu");
        i=0;
    }
})