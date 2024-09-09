let experience = 0;
let level = 1;
const maxExperience = 100;

function addExperience() {
    experience += 10; // Incrementa a experiência
    if (experience >= maxExperience) {
        experience -= maxExperience;
        level++;
        document.getElementById('level').innerText = level; // Atualiza o nível
    }
    updateExperienceBar();
}

function updateExperienceBar() {
    const experienceFill = document.getElementById('experience-fill');
    const experiencePercentage = (experience / maxExperience) * 100;
    experienceFill.style.width = experiencePercentage + '%';
    document.getElementById('experience').innerText = experience; // Atualiza o valor da experiência
}

// Inicializa a barra de experiência
updateExperienceBar();
