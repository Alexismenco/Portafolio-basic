
var bienvenido = "¡Bienvenido!";
var h2 = document.querySelector('.bienvenido');
let i = 0;

function escribe() {
    if(i < bienvenido.length){
        h2.innerHTML += bienvenido.charAt(i);
        i++;
        setTimeout(escribe, 200);
    };   
};
escribe()