import { Administrador } from "./classes/administrador.js";
const formCadAdm = document.getElementById("formCadAdm");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const divMensagemCadAdm = document.getElementById("divMensagemCadAdm");
function exibirMensagem(color, msg) {
    divMensagemCadAdm.style.color = color;
    divMensagemCadAdm.textContent = msg;
}
formCadAdm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const senha = txtSenha.value;
    const adm = new Administrador(nome, email, senha);
    adm.cadastrar();
    exibirMensagem("green", "Cadastro realizado com sucesso!");
    return;
});
//# sourceMappingURL=cadAdmSimplificado.js.map