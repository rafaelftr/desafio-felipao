let heroName = "Fontoura"; // Nome do herói
let heroExperience = getRandomArbitrary(); // Variável para armazenar experiência do herói gerada aleatoriamente pela função abaixo
function getRandomArbitrary() {
    return Math.random() * (11000 - 1) + 1;
  }

// Definir rank do herói baseado na experiência obtida anteriormente
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
console.log("O herói de nome " + heroName + " está no nível de " + heroRank);