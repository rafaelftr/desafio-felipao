// Função para capturar entrada do usuário no navegador
function getUserInput(message) {
    return prompt(message);
}

// Definir o nome do herói
let heroName = getUserInput("Digite o nome do herói:");

// Capturar a experiência do herói e converter para número
let heroExperience = parseFloat(getUserInput("Digite a experiência do herói:"));

// Validar se a experiência está dentro do intervalo esperado
if (isNaN(heroExperience) || heroExperience < 1) {
    console.error("Experiência inválida! Digite um valor maior que 1.");
} else {
    // Definir rank do herói baseado na experiência
    let heroRank;
    if (heroExperience <= 1000) {
        heroRank = "Ferro";
    } else if (heroExperience <= 2000) {
        heroRank = "Bronze";
    } else if (heroExperience <= 5000) {
        heroRank = "Prata";
    } else if (heroExperience <= 7000) {
        heroRank = "Ouro";
    } else if (heroExperience <= 8000) {
        heroRank = "Platina";
    } else if (heroExperience <= 9000) {
        heroRank = "Ascendente";
    } else if (heroExperience <= 10000) {
        heroRank = "Imortal";
    } else if (heroExperience >= 10001) {
        heroRank = "Radiante";
    }

    // Exibir o nome e rank do herói
    console.log(`O Herói de nome **${heroName}** está no nível de **${heroRank}**`);
}