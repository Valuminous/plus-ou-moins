const random = Math.floor(Math.random() * 100);
const myButton = document.querySelector('.btn');
var input = document.querySelector('#answer');
var i = 0;


 var regex = /^\d+$/;

myButton.addEventListener('click', (event) => {
    i++;
   
    if (regex.test(input.value)){}
        
    else{
         alert("Ce n'est pas un nombre valide");
         i--;
    }
       
    console.log(myButton);
    console.log(i);
    console.log(input);

    if (i == 3) {
        alert("salut");
        window.location.reload();
        input.value = "";
    }
    if (input.value == random) {
        alert("Bravo");
        input.value = "";
    } else if (input.value < random) {
        alert("plus");
        input.value = "";
    } else if (input.value > random) {
        alert("moins");
        input.value = "";
    }
})