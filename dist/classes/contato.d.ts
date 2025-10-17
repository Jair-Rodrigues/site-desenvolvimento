export declare class Contato {
    nome: string;
    email: string;
    dataContato: string;
    mensagemContato: string;
    id: string;
    constructor(nome: string, email: string, dataContato: string, mensagemContato: string);
    cadastrar(): void;
    static listar(): Contato[];
    static excluir(id: string): void;
}
//# sourceMappingURL=contato.d.ts.map