// gestaoDocentes.ts (Para o arquivo gestaoDocente.html)

import { Docente} from "./classes/docente.js"; // Importe a interface Professor

const DOCENTES_STORAGE_KEY = 'docentesDoCurso';
const container = document.getElementById('divGestaoDocente');
let docentes: Docente[] = []; 

/**
 * Carrega os dados dos docentes do localStorage.
 */
function carregarDocentes(): Docente[] {
    const jsonDocentes = localStorage.getItem(DOCENTES_STORAGE_KEY);
    if (jsonDocentes) {
        try {
            return JSON.parse(jsonDocentes) as Docente[];
        } catch (e) {
            console.error('Erro ao fazer parse dos dados do localStorage:', e);
            return [];
        }
    }
    return [];
}

/**
 * Salva a lista de docentes atualizada no localStorage.
 */
function salvarDocentes(): void {
    localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(docentes));
    // Após salvar, você pode querer renderizar novamente a tabela
    renderizarTabelaGestao(docentes);
}

/**
 * Cria o HTML completo da tabela de gestão.
 * @param listaDocentes - Lista de professores a serem exibidos.
 */
function renderizarTabelaGestao(listaDocentes: Docente[]): void {
    if (!container) return;

    // 1. Cria a tabela (incluindo a coluna 'Ações')
    let htmlTabela = `
        <table id="table-gestao-docente">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Professor(a)</th>
                    <th>Titulação</th>
                    <th cowspan="2">Ações</th> </tr>
            </thead>
            <tbody>
    `;

    // 2. Preenche o corpo da tabela
    listaDocentes.forEach(docente => {
        htmlTabela += `
            <tr data-id="${docente.id}">
                <td><img class="tdFoto" src="${docente.fotoSrc}" alt="${docente.fotoAlt}" style="width: 50px; height: 50px;"/></td>
                <td>${docente.nome}</td>
                <td>${docente.titulacao}</td>
                <td>
                    <button class="btn-editar" data-id="${docente.id}">Editar</button>
                    <button class="btn-excluir" data-id="${docente.id}">Excluir</button>
                </td>
            </tr>
        `;
    });

    htmlTabela += `
            </tbody>
        </table>
    `;

    // 3. Adiciona o botão "Adicionar Professor" e injeta o HTML no container
    container.innerHTML = `
        <h2>Gestão do Corpo Docente</h2>
        ${htmlTabela}
        <button id="btn-adicionar-professor">Adicionar Professor</button>
    `;

    // 4. Adiciona os event listeners aos botões
    adicionarEventListeners();
}

/**
 * Adiciona listeners para os botões de Ações e o botão Adicionar.
 */
function adicionarEventListeners(): void {
    const btnAdicionar = document.getElementById('btn-adicionar-professor');
    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', () => {
            alert('Lógica para adicionar professor. Abrir um modal/formulário, etc.');
            // Implementação da lógica de adição e depois chamar salvarDocentes()
        });
    }

    document.querySelectorAll('.btn-editar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = (e.target as HTMLButtonElement).dataset.id;
            alert(`Lógica para editar o professor com ID: ${id}`);
            // Implementação da lógica de edição e depois chamar salvarDocentes()
        });
    });

    document.querySelectorAll('.btn-excluir').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt((e.target as HTMLButtonElement).dataset.id || '0');
            if (confirm(`Tem certeza que deseja excluir o professor com ID: ${id}?`)) {
                // Filtra o professor excluído
                docentes = docentes.filter(p => p.id !== id);
                salvarDocentes(); // Salva e renderiza novamente
            }
        });
    });
}


// Função principal para iniciar a gestão
function iniciarGestaoDocente(): void {
    docentes = carregarDocentes();
    if (docentes.length === 0) {
        // Se não houver dados, exibe uma mensagem
        if(container) {
            container.innerHTML = `
                <h2>Gestão do Corpo Docente</h2>
                <p>Nenhum dado de docente encontrado. Certifique-se de que a página original foi visitada.</p>
                <button id="btn-adicionar-professor">Adicionar Professor</button>
            `;
             adicionarEventListeners(); // Para o botão adicionar funcionar
        }
    } else {
        renderizarTabelaGestao(docentes);
    }
}

// Inicia a aplicação quando a página de gestão carrega
document.addEventListener('DOMContentLoaded', iniciarGestaoDocente);

/*
import {Docente} from "./classes/docente.js";

window.onload = () => {
    carregarTabela();
}

function carregarTabela(){
    const listaDocente = Docente.listar();
    const tabela = document.getElementById("divGestaoDocente") as HTMLTableElement;

    

    tabela.innerHTML = `
    <tr>
    <th>Foto</th>
    <th>Professor</th>
    <th>Titulação</th>
    <th cowspan="2">Ações</th>
    </tr>
    `;

    listaDocente.forEach(docente => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = adm.nome;
        linha.insertCell().textContent = adm.email;
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            excluirAdm(adm.id);
        })
 linha.insertCell().appendChild(btnExcluir);
    });
    
}

function excluirAdm(id: string){
    Administrador.excluir(id);
    carregarTabela();
}
    */