'use strict';

var nome = document.getElementById('nome'),
    idade = document.getElementById('idade'),
    linguagem = document.getElementById('linguagem'),
    botaoResposta = document.getElementById('resposta'),
    areaResposta = document.getElementById('campo-resposta'); 

 botaoResposta.addEventListener("click", function() {
        if(nome.value === "" || idade.value === "" || linguagem.value === "") {
                alert("Preencha todos os campos!");
        } else {
                areaResposta.innerHTML = `Olá, ${nome.value}! Você tem ${idade.value} anos e está estudando ${linguagem.value}!`;
        }
 });
