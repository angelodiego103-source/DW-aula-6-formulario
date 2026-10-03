const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("lemail").value;
    const senha = document.getElementById("lsenha").value;

    console.log("Email:", email);
    console.log("Senha:", senha);
});