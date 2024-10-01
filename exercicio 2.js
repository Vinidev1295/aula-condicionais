let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*a) Para que serve o código acima?
Ao falar o nome de uma das frutas (Laranja, Maçã, Pêra) vai sair o preço e qualquer outra fruta sairá o valor5

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Será impresso "O preço da fruta Maçã é R$ 2,25
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
  Irá repetir o valor do default. */
