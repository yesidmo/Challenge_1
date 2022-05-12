const botonCopiar=document.querySelector("#boton-copiar");

let avisoTextoCopiado = document.querySelector(".texto-copiado-aviso-invisible");
let invisible="texto-copiado-aviso-invisible";
let visible="texto-copiado-aviso-visible";

botonCopiar.addEventListener("click",function(event){
    
    event.preventDefault();
    let content = document.querySelector(".output-text");
    content.select();
    document.execCommand("copy");
    //textoOutput.value=""
    mostrarAvisoCopiado(invisible,visible);
    setTimeout(function () { // con esta función, el aviso de texto copiado desaparece lentamente
        avisoTextoCopiado.classList.replace(visible,invisible);
    }, 700);

});

function mostrarAvisoCopiado(invisible,visible){
    avisoTextoCopiado.classList.replace(invisible,visible);
}