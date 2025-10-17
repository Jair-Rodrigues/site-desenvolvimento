export class Contato{
    public id: string;
    constructor(
        public nome: string,
        public email: string,
        public dataContato: string,
        public mensagemContato: string
    ){
        this.id = crypto.randomUUID();
        this.nome= nome;
        this.dataContato= new Date().toISOString();
        this.mensagemContato= mensagemContato;
    }
    
        
    cadastrar(): void {
        // Recupera a lista de mensagens armazenada no localstorage
        const listaContato: Contato[] = JSON.parse(localStorage.getItem("listaContato") || "[]");

        // Adiciona o contato atual a lista.
        listaContato.push(this);

        // Salva a lista atualizada no localStorage.
        localStorage.setItem("listaContato", JSON.stringify(listaContato));

    }

    static listar(): Contato[]{
        const listaContato: Contato[] = JSON.parse(localStorage.getItem("listaContato") || "[]");
        return listaContato;
    }

    static excluir(id: string): void{
        let listaContato: Contato[] = JSON.parse(localStorage.getItem("listaContato") || "[]");
        listaContato= listaContato.filter((contato: Contato) => contato.id !== id);
        localStorage.setItem("listaContato", JSON.stringify(listaContato));
    }
}