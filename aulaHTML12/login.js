/*
Descricao: PW-prova-28-09
nome_arquivo: contato.html
nome_exercicio: Situação de aprendizado 1 - tudo o que foi passado em aula
nome_aluno: Diego Augusto Ângelo
email_aluno: diego.angelo@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("lemail").value;
    const senha = document.getElementById("lsenha").value;

    console.log("Email:", email);
    console.log("Senha:", senha);
});