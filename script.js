onsole.log("¡JavaScript está funcionando!");

let boton = document.getElementById("miBoton");
let mensaje = document.getElementById("mensaje");
let contador = 0;

boton.addEventListener("click", function() {
    contador++;
    mensaje.textContent = "¡Hiciste click " + contador + " veces! 🎉";
    console.log("Click número: " + contador);
});
