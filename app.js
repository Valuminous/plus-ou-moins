const random = Math.floor(Math.random() * 100);
const myButton = document.querySelector('.btn');
var message = document.querySelector('#message');
var input = document.querySelector('#answer');
var i = 0;


 var regex = /^\d+$/;

myButton.addEventListener('click', (event) => {
    i++;
   
    if (regex.test(input.value)){}
        
    else{
         swal("Ce n'est pas un nombre valide");
         i--;
    }
         console.log(random);
         console.log(myButton);
         console.log(i);
         console.log(input);
         if (input.value == random) {
             swal("Bravo !!");
             input.value = "";
         } else if (input.value < random) {
             message.innerHTML = ("plus de " + input.value);
             input.value = "";
         } else if (input.value > random) {
             message.innerHTML = ("moins de " + input.value);
             input.value = "";
         }
         if (i == 10) {
             swal("Perdu !!");
             i = 0;
         }
     })