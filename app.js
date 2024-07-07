//let titulo = document.querySelector('#titulo'); 
//titulo.innerHTML = 'Jogo do numero secreto'; 

//let paragrafo = document.querySelector('.primeiroParagrafo'); 
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10:'; 
alert('Desenvolvido por Rogério de Oliveira')
let listaNumerosAleatorios = []; 
let numerosSorteados = 10; 
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1; 

function ExibirNaTela(tag,texto){
  let campo = document.querySelector(tag); 
  campo.innerHTML = texto; 
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
menssagemInicial();
function menssagemInicial(){
  ExibirNaTela('#titulo', 'Jogo do número secreto'); 
  ExibirNaTela('.primeiroParagrafo', 'Escolha um número entre 1 e 10:');
}
function verificarChute() {
  let chute = document.querySelector('input').value; 
  if( chute == numeroSecreto ){
    ExibirNaTela('#titulo','Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    let menssagem = `Você descobriu com ${tentativas} ${palavraTentativa} !`; 
    ExibirNaTela('.primeiroParagrafo', menssagem); 
    document.querySelector('#reiniciar').removeAttribute('disabled');
  } else{
    if(chute < numeroSecreto){
        ExibirNaTela('.primeiroParagrafo','O numero é maior!'); 
    } else{
      ExibirNaTela('.primeiroParagrafo','O numero é menor!'); 
    }
      tentativas++; 
      limparCampo(); 
     }
}
// Gerar numero aleatorio
function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numerosSorteados + 1);
 let tamanhoDaLista = listaNumerosAleatorios.length; 
    if (tamanhoDaLista ==numerosSorteados){
      listaNumerosAleatorios = []; 
    }
    if(listaNumerosAleatorios.includes(numeroEscolhido)){
      return gerarNumeroAleatorio(); 
    } else{
      listaNumerosAleatorios.push(numeroEscolhido);
      return numeroEscolhido; 
    }
}
//Limpar o campo do input 

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = ''; 
}
//Reiniciar o jogo 

function reiniciar() {
  numeroSecreto = gerarNumeroAleatorio(); 
  tentativas = 1; 
  limparCampo(); 
  document.querySelector('#reiniciar').setAttribute('disabled', true); 
  menssagemInicial(); 
}