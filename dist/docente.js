// extracaoDocentes.ts (Para a página que contém a tabela original)
import { DOCENTES_STORAGE_KEY } from "./constants.js";
// Chave para armazenar no localStorage
/**
 * Extrai os dados da tabela e salva no localStorage.
 */
function extrairESalvarDocentes() {
    var _a, _b;
    const tabela = document.getElementById('table-docente');
    if (!tabela) {
        console.error('Tabela docente não encontrada.');
        return;
    }
    const linhas = tabela.querySelectorAll('tr');
    // CORREÇÃO: Usamos a interface DocenteData para a lista de dados.
    const listaDocente = [];
    // Ignora a linha do cabeçalho (i = 1)
    for (let i = 1; i < linhas.length; i++) {
        const celulas = linhas[i].querySelectorAll('td');
        if (celulas.length < 3)
            continue;
        const imgElement = celulas[0].querySelector('img');
        // CORREÇÃO: Tipamos o objeto literal com a interface DocenteData.
        const novoDocente = {
            // Usamos Date.now() + i para um ID único inicial
            id: Date.now() + i,
            fotoSrc: imgElement ? imgElement.src : '',
            fotoAlt: imgElement ? imgElement.alt : '',
            nome: ((_a = celulas[1].textContent) === null || _a === void 0 ? void 0 : _a.trim()) || 'N/A',
            titulacao: ((_b = celulas[2].textContent) === null || _b === void 0 ? void 0 : _b.trim()) || 'N/A'
        };
        listaDocente.push(novoDocente);
    }
    // Salva o array no localStorage como uma string JSON
    try {
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
        console.log(`Dados de ${listaDocente.length} docentes salvos no localStorage.`);
    }
    catch (e) {
        console.error('Erro ao salvar no localStorage:', e);
    }
}
// Executa a função após o DOM carregar
document.addEventListener('DOMContentLoaded', extrairESalvarDocentes);
//# sourceMappingURL=docente.js.map