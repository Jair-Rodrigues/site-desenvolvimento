// docentedata.ts (ou onde suas interfaces estão)
import { DOCENTES_STORAGE_KEY } from "../constants.js";


export interface DocenteData {
    id: number | string; // Permitindo number na extração
    fotoSrc: string;     // URL da imagem no HTML original
    fotoAlt: string;
    nome: string;
    titulacao: string;
}

// No extracaoDocentes.ts:
// const listaDocente: DocenteData[] = [];
// const novoDocente: DocenteData = { ... };

export class  Docente{
    public id: string;
    constructor(
        public nome: string,
        public titulacao: string,
        public foto: string
    ){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.titulacao = titulacao;
        this.foto = foto;
    }

    cadastrar(): void {
        // Recupera a lista de professores armazenada no localstorage
        // CORREÇÃO: Usa a constante importada
        let listaDocente: Docente[] = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY)! || "[]");

        // Adiciona o Objeto professor atual a lista.
        listaDocente.push(this);

        // Salva a lista atualizada no localStorage.
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
    }

    static listar(): Docente[]{
        // CORREÇÃO: Usa a constante importada
        let listaDocente: Docente[] = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY)! || "[]");
        return listaDocente;
    }

    static excluir(id: string): void{
        // CORREÇÃO: Usa a constante importada
        let listaDocente: Docente[] = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY)! || "[]");
        listaDocente = listaDocente.filter((docente: Docente) => docente.id !== id);
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente));
    }

    static alterarDocente(docenteAlterado: Docente): void{
        // CORREÇÃO: Usa a constante importada
        let listaDocente: Docente[] = JSON.parse(localStorage.getItem(DOCENTES_STORAGE_KEY)! || "[]");
        listaDocente= listaDocente.map((docente: Docente) => {
            if(docente.id === docenteAlterado.id){
                return docenteAlterado;
            }
            return docente;
        });
        // CORREÇÃO: Usa a constante importada
        localStorage.setItem(DOCENTES_STORAGE_KEY, JSON.stringify(listaDocente)); 
    }

    static buscarDocente(id: string){
        let listaDocente: Docente[] = this.listar();
        // O retorno de find pode ser Docente ou undefined. O TS assume undefined/null.
        let docente = listaDocente.find(docente => docente.id === id);
        // Não há erro de tipagem aqui, pois o retorno está implícito como Docente | undefined.
        return docente; 
    }

}