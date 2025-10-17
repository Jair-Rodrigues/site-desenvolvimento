import {Administrador} from "./classes/administrador.js";

const formCadAdm = document.getElementById("formCadAdm") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const divMensagemCadAdm = document.getElementById("divMensagemCadAdm") as HTMLDivElement;


function exibirMensagem(color: string, msg: string){
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
    
})