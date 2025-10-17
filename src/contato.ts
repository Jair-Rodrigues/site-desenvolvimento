import { Contato } from "./classes/contato.js";

const formContato = document.getElementById("formContato") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail= document.getElementById("txtEmail") as HTMLInputElement;
const txtDataMensagem= document.getElementById("txtDataMensagem") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLTextAreaElement;
const btnLimpa = document.getElementById("btnLimpa") as HTMLButtonElement;
const divMensagemContato = document.getElementById("divMensagemContato") as HTMLDivElement;

function exibirMensagem(color: string, msg: string){
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
    
})

btnLimpa.addEventListener("click", (event) => {
    limparCampos();
    exibirMensagem("blue", "Campos limpos com sucesso!");
});

// Função para limpar campos
function limparCampos(): void {
    txtNome.value = "";
    txtEmail.value = "";
    txtDataMensagem.value = "";
    txtMensagem.value = "";
//    exibirMensagem("", ""); 
}
