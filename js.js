const textoInput=document.querySelector(".input-text");
textoInput.focus();
const textoOutput=document.querySelector(".output-text");

const logo =document.getElementById("logo-output");
botonDesencriptar.disabled=true;
let hayMayusculas=false;

function ocultarLogoOutput(){
        logo.style.display="none";
}
function btnDesencriptar(){
    const textoEncriptado= desencriptar(textoInput.value);
    textoOutput.value=textoEncriptado;
}
function desencriptar(cadenaParaDesencriptar){
    let matrizCodigo=[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for (let index = 0; index < matrizCodigo.length; index++) {
        if(cadenaParaDesencriptar.includes(matrizCodigo[index][1])){
            cadenaParaDesencriptar=cadenaParaDesencriptar.replaceAll(matrizCodigo[index][1],
            matrizCodigo[index][0]);
        }
    }
    textoOutput.value=""; 
    return cadenaParaDesencriptar;
}

function btnDesencriptarY(){
    const textoEncriptado= DesencriptarY(textoInput.value);
    textoOutput.value=textoEncriptado;
}
function DesencriptarY(cadenaParaDesencriptar){
    let matrizCodigo=[];
    let matrizCodigoDesencriptado=[];
    let matrizCodigoDesencriptadoLetras=[];
    let cadenaDesencriptada="";
    for (let index = 0; index < cadenaParaDesencriptar.length; index++) {
        matrizCodigo.push(cadenaParaDesencriptar.charCodeAt(index));
        matrizCodigoDesencriptado.push(matrizCodigo[index]-5);
        matrizCodigoDesencriptadoLetras.push(String.fromCharCode(matrizCodigoDesencriptado[index]));
        cadenaDesencriptada+=matrizCodigoDesencriptadoLetras[index];     
    }
    textoOutput.value=""; 
    return cadenaDesencriptada;
}