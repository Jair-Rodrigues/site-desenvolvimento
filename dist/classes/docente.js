// docentedata.ts (ou onde suas interfaces estão)
import { DOCENTES_STORAGE_KEY } from "../constants.js";
// No extracaoDocentes.ts:
// const listaDocente: DocenteData[] = [];
// const novoDocente: DocenteData = { ... };
export class Docente {
    constructor(nome, titulacao, foto) {
        this.nome = nome;
        this.titulacao = titulacao;
        this.foto = foto;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.titulacao = titulacao;
        this.foto = foto;
    }
    cadastrar() {
        // Recupera a lista de professores armazenada no localstorage
        // CORREÇÃO: Usa a constante importada
        let listaDocente = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY) || "[]");
        // Adiciona o Objeto professor atual a lista.
        listaDocente.push(this);
        // Salva a lista atualizada no localStorage.
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
    }
    static listar() {
        // CORREÇÃO: Usa a constante importada
        let listaDocente = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY) || "[]");
        return listaDocente;
    }
    static excluir(id) {
        // CORREÇÃO: Usa a constante importada
        let listaDocente = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY) || "[]");
        listaDocente = listaDocente.filter((docente) => docente.id !== id);
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
    }
    static alterarDocente(docenteAlterado) {
        // CORREÇÃO: Usa a constante importada
        let listaDocente = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY) || "[]");
        listaDocente = listaDocente.map((docente) => {
            if (docente.id === docenteAlterado.id) {
                return docenteAlterado;
            }
            return docente;
        });
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
    }
    static buscarDocente(id) {
        let listaDocente = this.listar();
        // O retorno de find pode ser Docente ou undefined. O TS assume undefined/null.
        let docente = listaDocente.find(docente => docente.id === id);
        // Não há erro de tipagem aqui, pois o retorno está implícito como Docente | undefined.
        return docente;
    }
}
//# sourceMappingURL=docente.js.map