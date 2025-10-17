import { Docente } from "./classes/docente.js";
// CORREÇÃO: Usando o ID correto 'divMensagemCadDocente'
const formCadDocente = document.getElementById("formCadDocente");
const txtNome = document.getElementById("txtNome");
const txtTitulacao = document.getElementById("txtTitulacao");
const flsFoto = document.getElementById("flsFoto");
// MUDANÇA: O ID no HTML foi ajustado para 'divMensagemCadDocente'
const divMensagemCadDocente = document.getElementById("divMensagemCadDocente");
const btnSubmit = document.getElementById("btnSubmit");
const imgFotoAtual = document.getElementById("imgFotoAtual"); // Novo elemento
const tituloFotoAtual = document.getElementById("tituloFotoAtual");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
window.onload = () => {
    if (id) {
        btnSubmit.textContent = "Alterar";
        carregarDadosDocente(id);
    }
};
function exibirMenssagem(color, msg) {
    divMensagemCadDocente.style.color = color;
    divMensagemCadDocente.textContent = msg;
}
/**
 * Função auxiliar para centralizar a lógica de cadastro/alteração
 * após a foto (se houver) ter sido processada.
 */
function processarDocente(nome, titulacao, fotoBase64) {
    if (!id) {
        // CADASTRO
        let docente = new Docente(nome, titulacao, fotoBase64);
        docente.cadastrar();
        exibirMenssagem("green", "Cadastro Realizado com Sucesso!");
    }
    else {
        // ALTERAÇÃO
        let docenteAlterado = new Docente(nome, titulacao, fotoBase64);
        docenteAlterado.id = id;
        // **ASSUMIMOS** que Docente.alterarDocente() existe e funciona.
        Docente.alterarDocente(docenteAlterado);
        exibirMenssagem("green", "Alteração Realizada com Sucesso!");
    }
}
formCadDocente.addEventListener("submit", (event) => {
    event.preventDefault();
    let nome = txtNome.value;
    let titulacao = txtTitulacao.value;
    const arquivoFoto = flsFoto.files ? flsFoto.files[0] : null;
    // Se estiver cadastrando e não houver arquivo, avise o usuário
    if (!arquivoFoto && !id) {
        exibirMenssagem("red", "Por favor, selecione uma foto para o professor.");
        return;
    }
    // Se um NOVO arquivo foi selecionado (seja cadastro ou edição)
    if (arquivoFoto) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const fotoBase64 = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            processarDocente(nome, titulacao, fotoBase64);
        };
        reader.readAsDataURL(arquivoFoto);
    }
    else {
        // Lógica apenas para ALTERAÇÃO onde NENHUM novo arquivo foi selecionado
        if (id) {
            // **CORREÇÃO/TRATAMENTO DE ERRO AQUI:** O retorno de buscarDocente deve ser tratado
            let docenteExistente = Docente.buscarDocente(id);
            if (docenteExistente) {
                // Usa a foto existente (Base64)
                processarDocente(nome, titulacao, docenteExistente.foto);
            }
            else {
                exibirMenssagem("red", "Erro: Docente para alteração não encontrado.");
            }
        }
        // Se for um novo cadastro e arquivoFoto é null, ele já foi barrado no IF inicial.
    }
});
// ---------------------------------------------------------------------
function carregarDadosDocente(id) {
    let docente = Docente.buscarDocente(id);
    if (docente) {
        txtNome.value = docente.nome;
        txtTitulacao.value = docente.titulacao;
        // LÓGICA DE EXIBIÇÃO DA FOTO ATUAL PARA EDIÇÃO
        if (docente.foto) {
            imgFotoAtual.src = docente.foto;
            // Torna o título e a imagem visíveis APENAS na edição
            tituloFotoAtual.style.display = "block";
            imgFotoAtual.style.display = "block";
        }
    }
    else {
        exibirMenssagem("red", "Erro: Docente não encontrado para carregamento.");
    }
}
// **CORREÇÃO/TRATAMENTO DE ERRO AQUI:** Garante que docente não é nulo.
//# sourceMappingURL=cadDocente.js.map