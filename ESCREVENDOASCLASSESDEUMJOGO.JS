// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Determina o ataque com base no tipo
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "realizou um ataque";
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
let heroi1 = new Heroi("Herói Mago", 25, "mago");
let heroi2 = new Heroi("Herói Guerreiro", 30, "guerreiro");

heroi1.atacar(); // Exemplo de saída: "O mago atacou usando magia"
heroi2.atacar(); // Exemplo de saída: "O guerreiro atacou usando espada"
