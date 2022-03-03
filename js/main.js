"use strict";

const nome = document.getElementById("nome"),
  idade = document.getElementById("idade"),
  linguagem = document.getElementById("linguagem"),
  frase = document.getElementById("frase"),
  valor = document.getElementById("valor"),
  res1 = document.getElementById("resposta1"),
  res2 = document.getElementById("resposta2"),
  res3 = document.getElementById("resposta3"),
  botao1 = document.getElementById("botao1"),
  botao2 = document.getElementById("botao2"),
  botao3 = document.getElementById("botao3");

botao1.addEventListener("click", function () {
  if (nome.value === "" || idade.value === "" || linguagem.value === "") {
    alert("Preencha todos os campos!");
  } else {
    res1.innerHTML = `Olá, ${nome.value}! Você tem ${idade.value} anos e está estudando ${linguagem.value}!`;
  }
});

botao2.addEventListener("click", function () {
  const valorConvertido = parseFloat(valor.value.replace(",", "."));
  let moedasUm = parseInt(valorConvertido),
    moedaCinq = 0,
    moedaVint = 0,
    moedaDez = 0,
    moedaCinco = 0,
    resto = valorConvertido - moedasUm;

  if (valor.value === "") {
    alert("Digite um valor válido!");
  } else if (resto >= 0.5) {
    moedaCinq = 1;
    resto -= 0.5;
  } else if (resto >= 0.25) {
    moedaVint = 1;
    resto -= 0.25;
  } else if (resto >= 0.1) {
    moedaDez = resto * 10;
    resto -= Math.round(moedaDez) / 10;
  } else if (resto >= 0.05) {
    moedaCinco = resto * 20;
    resto -= Math.round(moedaCinco);
  }

  res2.innerHTML = `<p>O troco terá um mínimo de ${(
    moedasUm +
    moedaCinq +
    moedaVint +
    moedaDez +
    moedaCinco
  ).toFixed(0)} moedas.</p>`;

  res2.innerHTML += `<li> sendo ${moedasUm} moeda(s) de R$1,00</li>`;
  res2.innerHTML += `<li> ${moedaCinq} moeda(s) de R$0,50</li>`;
  res2.innerHTML += `<li> ${moedaVint} moeda(s) de R$0,25</li>`;
  res2.innerHTML += `<li> ${parseInt(moedaDez)} moeda(s) de R$0,10</li>`;
  res2.innerHTML += `<li> ${Math.round(moedaCinco)} moeda(s) de R$0,05</li>`;
});

botao3.addEventListener("click", function () {
  let cPalavra = 0;
  let cFrase = 0;

  let fraseV = frase.value;

  for(let i = 0; i < fraseV.length; i++){
    if(fraseV[i] === "." || fraseV[i] === "!" || fraseV[i] === "?"){
      cFrase++;
    }
  }

  fraseV.replace('.', '');
  fraseV.replace('!', '');
  fraseV.replace('?', '');

  for(let i = 0; i < fraseV.length; i++){
    if(fraseV[i] === " "){
      cPalavra++;
    }
  }

  res3.innerHTML += `<h2>${frase.value}</h2><br/>`;
  res3.innerHTML += `<div>${nome.value} escreveu ${cFrase} frases,</div>`;
  res3.innerHTML += `<div>num total de ${cPalavra} palavras.</div>`;
});


  
