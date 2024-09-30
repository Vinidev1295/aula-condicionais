const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*a) Explique o que o código faz. Qual o teste que ele realiza? 
Ele pergunta um número ao usúario, transforma a string em número e verifica se o resto da divisão desse número por 2 é maior que 0, resultando em números pares ou ímpares.
b) Para que tipos de números ele imprime no console "Passou no teste"? 
Apenas para números pares.
c) Para que tipos de números a mensagem é "Não passou no teste"?*/
Apenas para números ímpares.
