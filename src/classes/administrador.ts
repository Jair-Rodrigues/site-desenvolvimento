export class Administrador{
    public id: string;
    constructor(
        public nome: string,
        public usuario: string,
        public senha: string
    ){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
    }

    cadastrar(): void {
        // Recupera a lista de adm armazenada no localstorage
        const listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");

        // Adiciona o adm atual a lista.
        listaAdm.push(this);

        // Salva a lista atualizada no localStorage.
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));


    }

    static listar(): Administrador[]{
        const listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        return listaAdm;
    }

    static excluir(id: string): void{
        let listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.filter((adm: Administrador) => adm.id !== id);
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
}