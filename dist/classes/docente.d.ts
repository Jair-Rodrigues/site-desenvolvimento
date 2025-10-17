export interface DocenteData {
    id: number | string;
    fotoSrc: string;
    fotoAlt: string;
    nome: string;
    titulacao: string;
}
export declare class Docente {
    nome: string;
    titulacao: string;
    foto: string;
    id: string;
    constructor(nome: string, titulacao: string, foto: string);
    cadastrar(): void;
    static listar(): Docente[];
    static excluir(id: string): void;
    static alterarDocente(docenteAlterado: Docente): void;
    static buscarDocente(id: string): Docente | undefined;
}
//# sourceMappingURL=docente.d.ts.map