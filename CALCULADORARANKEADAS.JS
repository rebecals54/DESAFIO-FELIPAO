// Função para calcular o saldo de Rankeadas e determinar o nível
function calcularNivelRankeadas(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível com base nas vitórias
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
let resultado = calcularNivelRankeadas(60, 20); // Substitua esses valores pelas vitórias e derrotas reais
console.log(resultado);
