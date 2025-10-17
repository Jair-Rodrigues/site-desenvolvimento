export declare class Administrador {
    nome: string;
    usuario: string;
    senha: string;
    id: string;
    constructor(nome: string, usuario: string, senha: string);
    cadastrar(): void;
    static listar(): Administrador[];
    static excluir(id: string): void;
}
//# sourceMappingURL=administrador.d.ts.map