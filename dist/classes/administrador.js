export class Administrador {
    constructor(nome, usuario, senha) {
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
    }
    cadastrar() {
        // Recupera a lista de adm armazenada no localstorage
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        // Adiciona o adm atual a lista.
        listaAdm.push(this);
        // Salva a lista atualizada no localStorage.
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    static listar() {
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        return listaAdm;
    }
    static excluir(id) {
        let listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.filter((adm) => adm.id !== id);
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
}
//# sourceMappingURL=administrador.js.map