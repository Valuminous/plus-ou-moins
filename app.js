const random = Math.round(Math.random() * 100);
const myButton = document.querySelector('.btn');
var input = document.querySelector('#answer');
var i = 0;

myButton.addEventListener('click', (event) => {
<<<<<<< HEAD
    // event.preventDefault();
    i++;
=======
    i++;
    console.log(random);
    console.log(myButton);
>>>>>>> master
    console.log(i);
    console.log(input);
    if (input.value == random) {
        alert("Bravo");
<<<<<<< HEAD
    } 
    else if (input.value < random) {
        alert("plus");
    } 
    else if (input.value > random) {
=======
        input.value="";
    } else if (input.value < random) {
        alert("plus");
        input.value="";
    } else if (input.value > random) {
>>>>>>> master
        alert("moins");
        input.value="";
    }
<<<<<<< HEAD
    if(i == 3){
        alert("perdu");
        i=0;
    }
=======
     if (i == 4) {
         alert("salut");
         i=0;
     }
>>>>>>> master
})