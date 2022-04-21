let input = document.querySelector("textarea#mensagem");
let output = document.querySelector("textarea#mensagemDecript");


function criptografar(){
    if(input.value.length == 0){
        document.getElementById('msg').innerHTML = "Por favor insira um texto para ser codificado.";

        input.focus();
    }else{
        document.querySelector("div#decodificador").innerHTML = '';

        var texto = input.value
        var txt =  texto.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('decodificador').innerHTML = `<textarea readonly class="texto-desenciptado" id="mensagemDecript">${txt}</textarea>`;

        document.getElementById('decodificador').innerHTML += '<button class="input-copiar" id="botao-copiar" onclick="copiar()">Copiar</button>';
    }
}



function descriptografar(){
    if(input.value.length == 0){
        document.getElementById('msg').innerHTML = "Por favor insira um texto para ser decodificado.";

        input.focus();
    }else{
        document.getElementById("decodificador").innerHTML = '';
        

        var texto = input.value
        var txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');

        document.getElementById('decodificador').innerHTML = `<textarea readonly  class="texto-desenciptado" id="mensagemDecript">${txt}</textarea>`;

        document.getElementById('decodificador').innerHTML += '<button class="input-copiar" id="botao-copiar" onclick="copiar()">Copiar</button>';


    }
}


function copiar(){
    document.querySelector('#mensagemDecript').select();
    document.execCommand('copy');
    document.getElementById('msg').innerHTML = "Texto copiado para a área de transferência!";
}

let btnCriptografar = document.querySelector("button#criptografar");
btnCriptografar.onclick = criptografar;

let btnDescriptografar = document.querySelector("button#descriptografar");
btnDescriptografar.onclick = descriptografar;

let btnCopiar = document.querySelector("button#botao-copiar");
btnCopiar.onclick = copiar;