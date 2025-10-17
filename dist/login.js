import { Administrador } from "./classes/administrador";
const formLogin = document.getElementById("formLogin");
const txtUsuario = document.getElementById("txtUsuario");
const txtSenha = document.getElementById("txtSenha");
const mensagem = document.getElementById("mensagem");
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = txtUsuario.value;
    const senha = txtSenha.value;
    if (!usuario) {
        mensagem.style.color = "red";
        mensagem.textContent = "Campo usuário obrigatório! ";
    }
    else if (!senha) {
        mensagem.style.color = "red";
        mensagem.textContent = "Campo senha obrigatório! ";
    }
    else if (usuario == "admin" && senha == "123") {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso! ";
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);
    }
});
//# sourceMappingURL=login.js.map