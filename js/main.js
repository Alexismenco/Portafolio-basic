var formulario = document.querySelector("#form");
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

formulario.addEventListener("submit", envioCorreo());

function envioCorreo(event){
    event.preventDefault()
    const form = new FormData(this);
    console.log(form.get('name'))

}