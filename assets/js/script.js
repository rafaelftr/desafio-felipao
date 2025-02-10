function getHeroRank(experience) {
    if (experience <= 1000) return "Ferro";
    if (experience <= 2000) return "Bronze";
    if (experience <= 5000) return "Prata";
    if (experience <= 7000) return "Ouro";
    if (experience <= 8000) return "Platina";
    if (experience <= 9000) return "Ascendente";
    if (experience <= 10000) return "Imortal";
    return "Radiante";
}

function classificarHeroi() {
    const heroName = document.getElementById("heroName").value;
    const heroExperience = parseFloat(document.getElementById("heroExperience").value);
    
    if (!heroName) {
        alert("Por favor, insira o nome do herói.");
        return;
    }
    
    if (isNaN(heroExperience) || heroExperience < 1) {
        alert("Experiência inválida! Digite um número maior que 1.");
        return;
    }
    
    const heroRank = getHeroRank(heroExperience);
    document.getElementById("resultado").innerHTML = `O Herói de nome <strong>${heroName}</strong> está no nível de <strong>${heroRank}</strong>`;
}

document.getElementById("heroExperience").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        classificarHeroi();
    }
});