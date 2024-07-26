const inputOrigen = document.getElementById("input__origen");
const inputDestino = document.getElementById("input__destino");
const botonEncriptar = document.getElementById("boton__encriptar");
const botonDesencriptar =document.getElementById("boton__desencriptar");
const botonCopiar = document.getElementById("boton__copiar");
const imagen1 = document.getElementById("imagen1");
// ocultar boton copiar inicialmente
botonCopiar.style.display = "none";
//ocultar input--destino
inputDestino.style.display ="none";
imagen1.style.display = "block"
//funcion para encriptar
function encriptarTexto(texto){
    if (/^[a-z ñ]+$/.test(texto)) {
        alert("El texto debe ser en minúsculas,sin acentos y sin caracteres especiales");//validacion de caracteres especiales en boton encriptar
        return undefined;
        
    }
    const reglas ={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat",
    };
    
    return texto.split("").map(letra=>reglas[letra]||letra).join("");
}
//Funcion para desencriptar texto

function DesencriptarTexto(texto) {
    if (/^[a-z ñ]+$/.test(texto)) {
        alert("El texto debe ser en minúsculas,sin acentos y sin caracteres especiales");//validacion de caracteres especiales en boton desencriptar
        return undefined;
        
    }
    const reglas ={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u",
    };
   
   for (const clave in reglas){
    texto = texto.replace(new RegExp(clave,"g"), reglas[clave]);
   }
    return texto;
}

// Codigo del boton encriptar manejando eventos
botonEncriptar.addEventListener("click",()=>{
  //encriptar texto
 const textoEncriptado=encriptarTexto(inputOrigen.value);
 //verificar si el texto se ecriptó correctamenete
 if (textoEncriptado !== undefined) {
     inputDestino.value = textoEncriptado; //muestra el input destinpo con el texto encriptado
     inputDestino.style.display = "block";
     botonCopiar.style.display = "block";//muestra el botón copiar
     imagen1.style.display="none";
 }
 
 
});
// Codigo del boton desencritar
botonDesencriptar.addEventListener("click",()=>{
  const textoEncriptado=DesencriptarTexto(inputOrigen.value);
  //verificar si el texto se ecriptó correctamenete
  if (textoEncriptado !== undefined) {
      inputDestino.value = textoEncriptado; //muestra el input destinpo con el texto encriptado
      inputDestino.style.display = "block";
      botonCopiar.style.display = "block";//muestra el botón copiar
      imagen1.style.display="none";
  }
  
  
 });

//Codigo del boton Copiar
botonCopiar.addEventListener("click",()=>{
    //selecciona el texto de inpu-destino    
    inputDestino.select();
    //copia el texto seleccionado
    document.execCommand("copy");

});
