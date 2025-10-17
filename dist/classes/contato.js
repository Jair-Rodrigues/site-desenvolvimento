export class Contato {
    constructor(nome, email, dataContato, mensagemContato) {
        this.nome = nome;
        this.email = email;
        this.dataContato = dataContato;
        this.mensagemContato = mensagemContato;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.dataContato = new Date().toISOString();
        this.mensagemContato = mensagemContato;
    }
    cadastrar() {
        // Recupera a lista de mensagens armazenada no localstorage
        const listaContato = JSON.parse(localStorage.getItem("listaContato") || "[]");
        // Adiciona o contato atual a lista.
        listaContato.push(this);
        // Salva a lista atualizada no localStorage.
        localStorage.setItem("listaContato", JSON.stringify(listaContato));
    }
    static listar() {
        const listaContato = JSON.parse(localStorage.getItem("listaContato") || "[]");
        return listaContato;
    }
    static excluir(id) {
        let listaContato = JSON.parse(localStorage.getItem("listaContato") || "[]");
        listaContato = listaContato.filter((contato) => contato.id !== id);
        localStorage.setItem("listaContato", JSON.stringify(listaContato));
    }
}
//# sourceMappingURL=contato.js.map