// Importa o módulo 'readline' para permitir a leitura de entradas do usuário no terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para capturar entrada do usuário no terminal usando callbacks
function getUserInput(message, callback) {
    rl.question(message, (input) => {
        callback(input);
    });
}

// Função para determinar o rank do herói
function getHeroRank(experience) {
    switch (true) {
        case (experience <= 1000):
            return "Ferro";
        case (experience <= 2000):
            return "Bronze";
        case (experience <= 5000):
            return "Prata";
        case (experience <= 7000):
            return "Ouro";
        case (experience <= 8000):
            return "Platina";
        case (experience <= 9000):
            return "Ascendente";
        case (experience <= 10000):
            return "Imortal";
        default:
            return "Radiante";
    }
}

// Fluxo principal usando callbacks
getUserInput("Digite o nome do herói: ", (heroName) => {
    getUserInput("Digite a experiência do herói: ", (experienceInput) => {
        const heroExperience = parseFloat(experienceInput);

        if (isNaN(heroExperience) || heroExperience < 1) {
            console.error("Experiência inválida! Digite um valor maior que 1.");
            rl.close();
        } else {
            const heroRank = getHeroRank(heroExperience);
            console.log(`O Herói de nome **${heroName}** está no nível de **${heroRank}**`);
            rl.close();
        }
    });
});
