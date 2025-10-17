import { Contato } from "./classes/contato.js";
const formContato = document.getElementById("formContato");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtDataMensagem = document.getElementById("txtDataMensagem");
const txtMensagem = document.getElementById("txtMensagem");
const btnLimpa = document.getElementById("btnLimpa");
const divMensagemContato = document.getElementById("divMensagemContato");
function exibirMensagem(color, msg) {
    divMensagemContato.style.color = color;
    divMensagemContato.textContent = msg;
}
formContato.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const dataMensagem = txtDataMensagem.value;
    const mensagem = txtMensagem.value;
    const contato = new Contato(nome, email, dataMensagem, mensagem);
    contato.cadastrar();
    exibirMensagem("green", "Mensagem Enviada com Sucesso!");
    limparCampos();
    return;
});
btnLimpa.addEventListener("click", (event) => {
    limparCampos();
    exibirMensagem("blue", "Campos limpos com sucesso!");
});
// Função para limpar campos
function limparCampos() {
    txtNome.value = "";
    txtEmail.value = "";
    txtDataMensagem.value = "";
    txtMensagem.value = "";
    //    exibirMensagem("", ""); 
}
//# sourceMappingURL=contato.js.map