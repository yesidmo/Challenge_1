const botonDesencriptar=document.querySelector("#boton-desencriptar-y");
let avisoTextoCopia = document.querySelector(".texto-no-encontrado-visible");

let invisibles="texto-no-encontrado-invisible";
let visibles="texto-no-encontrado-visible";
function mostrarTextoNoEncontrado(visibles,invisibles){
    avisoTextoCopia.classList.replace(visibles,invisibles);
}

function btnEncriptar(){
    const textoEncriptado= encriptar(textoInput.value);
    textoOutput.value=textoEncriptado; 
    ocultarLogoOutput();
    mostrarTextoNoEncontrado(visibles,invisibles);
}

function encriptar(cadenaParaEncriptar){
    buscarMayusculas(cadenaParaEncriptar);
  
    let matrizCodigo=[["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        
    //cadenaParaEncriptar=cadenaParaEncriptar.toLowerCase();
    for (let index = 0; index < matrizCodigo.length; index++) {
            
        if(cadenaParaEncriptar.includes(matrizCodigo[index][0])){
            cadenaParaEncriptar=cadenaParaEncriptar.replaceAll(matrizCodigo[index][0],
            matrizCodigo[index][1]);
        }
    }
    textoInput.value="";    
    return cadenaParaEncriptar;
}

function btnEncriptarY(){
    const textoEncriptado= encriptarY(textoInput.value);
    textoOutput.value=textoEncriptado;
    botonDesencriptar.disabled=false;
    ocultarLogoOutput();
    mostrarTextoNoEncontrado(visibles,invisibles);
}
function encriptarY(cadenaParaEncriptar){
    let matrizCodigo=[];
    let matrizCodigoEncriptado=[];
    let matrizCodigoEncriptadoLetras=[];
    let cadenaEncriptada=""
    for (let index = 0; index < cadenaParaEncriptar.length; index++) {
        matrizCodigo.push(cadenaParaEncriptar.charCodeAt(index));
        matrizCodigoEncriptado.push(matrizCodigo[index]+5);
        matrizCodigoEncriptadoLetras.push(String.fromCharCode(matrizCodigoEncriptado[index]));
        cadenaEncriptada+=matrizCodigoEncriptadoLetras[index];     
    }
    textoInput.value="";
    return cadenaEncriptada;
}

function buscarMayusculas(cadenaParaEncriptar){
    let i=0;
    var expresion = /[^a-zA-Z\s\u00f1\u00d1]+/g;
    while(i<cadenaParaEncriptar.length){
        if(cadenaParaEncriptar[i]==cadenaParaEncriptar[i].toUpperCase()){
            alert("No digites letras mayúsculas ni acentos");
            hayMayusculas=true;
            break;
        }
        if(expresion.test(cadenaParaEncriptar[i])){
            alert("Sólo letras minúsculas, sin acentos ni caracteres especiales");
            hayMayusculas=true;
            break;
        }
        i++;
    }
}