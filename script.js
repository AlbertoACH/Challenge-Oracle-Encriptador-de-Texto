const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".resultado");

//Llaves de encriptación
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){ //Función para activar botón de encriptación
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".contenedorMuñeco").style.display = "none"
    document.querySelector(".contenedorInformacion").style.display = "none"
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
    document.querySelector(".resultado").style.display = "show";
    document.querySelector(".resultado").style.display = "inherit";
}

function encriptar(stringEncriptada) { //Función de encriptado que se usara al activar el botón
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){ //Función para activar botón de desencriptación
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    document.querySelector(".contenedorMuñeco").style.display = "none"
    document.querySelector(".contenedorInformacion").style.display = "none"
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
    document.querySelector(".resultado").style.display = "show";
    document.querySelector(".resultado").style.display = "inherit";
}

function desencriptar(stringDesencriptada) { //Función de desencriptado que se usara al activar el botón
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){ //Función para el botón de copiado de texto
    const contenido = document.querySelector(".resultado");
    contenido.select();
    document.execCommand("copy");
}