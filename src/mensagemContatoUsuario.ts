import {Contato} from "./classes/contato.js";

window.onload = () => {
    carregarDiv();
}

function carregarDiv(){
    const listaContato = Contato.listar();
    const divContatoUsuario = document.getElementById("divContatoUsuario") as HTMLDivElement;

    // Limpa o conteúdo atual da div para evitar duplicatas
    divContatoUsuario.innerHTML = '';

    if (listaContato.length === 0) {
        divContatoUsuario.innerHTML = `<p>Não há mensagens para exibir.</p>`;
        return;
    }
    

    divContatoUsuario.innerHTML = `
    <h3>Nome</h3>
    <h4>E-mail</h4>
    <h4>Data</h4>
    <h4>Mensagem</h4>
    `;


    listaContato.forEach(contato => {
        const nomeH3 = document.createElement("h3");
        nomeH3.textContent = contato.nome;
        const emailH4 = document.createElement("h4");
        emailH4.textContent = `E-mail: ${contato.email}`;
        const dataH4 = document.createElement("h4");
        dataH4.textContent = `Data: ${contato.dataContato}`;
        const mensagemH4 = document.createElement("h4");
        mensagemH4.textContent = `Mensagem`;
        // Cria e adiciona o parágrafo.
        const paragrafoP = document.createElement("p");
        paragrafoP.textContent = `${contato.mensagemContato}`;
        
        divContatoUsuario.appendChild(nomeH3);
        divContatoUsuario.appendChild(emailH4);
        divContatoUsuario.appendChild(dataH4);
        divContatoUsuario.appendChild(mensagemH4)
        divContatoUsuario.appendChild(paragrafoP);
        
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.backgroundColor = "red";
        btnExcluir.style.color = "white";
        btnExcluir.addEventListener("click", () => {
            excluirContato(contato.id);
        })
        // código para adicionar um botão logo após a mensagem exibida.
        divContatoUsuario.appendChild(btnExcluir);
        //        Adiciona um espaço ou quebra de linha para separar as mensagens
        const separador = document.createElement("hr");
        divContatoUsuario.appendChild(separador);
    });
}

function excluirContato(id: string){
    Contato.excluir(id);
    carregarDiv();
}