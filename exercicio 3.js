const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
/*a) O que a primeira linha está fazendo?
É uma variável que está pedindo um número para o usuário por prompt e já transformando a string em Number.
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Se o usuário digitar o número 10, será impresso "Esse número passou no teste". Se o número fosse -10 será impresso um erro.
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Será impresso um erro pois o número é menor que 0 (foi especificado no if que precisa ser maior que 0) e a variável let mensagem deveria estar dentro de um else seguido de console.log(mensagem) para imprimir "Essa mensagem é secreta" caso número for menor que 0.
  */
//codigo corrigido//
const numero = Number(prompt("Digite o primeiro número."))
if(numero > 0) {
  console.log("Esse número passou no teste")
}else{
    let mensagem = "Essa mensagem é secreta"
   console.log(mensagem)
}
