const GAME = {
    player: {
        classe: null,
        skill: null,
        weapon: null,
        hp: 30,
        pe: 10
    },
    enemy: null
};

function showScreen(id) {
    document.querySelectorAll(".screen")
        .forEach(s => s.classList.add("hidden"));
    document.getElementById(id)
        .classList.remove("hidden");
}

function selectClass(classe) {
    GAME.player.classe = classe;
    renderSkills();
    showScreen("screen-skill");
}

function renderSkills() {
    const container = document.getElementById("skill-options");
    container.innerHTML = "";

    CLASS_SKILLS[GAME.player.classe].forEach(skill => {
        const btn = document.createElement("button");
        btn.innerText = `${skill.nome} (PE: ${skill.custoPE})`;
        btn.onclick = () => selectSkill(skill);
        container.appendChild(btn);
    });
}

function selectSkill(skill) {
    GAME.player.skill = skill;
    generateWeapon();
    showScreen("screen-weapon");
}

function generateWeapon() {
    const list = WEAPONS[GAME.player.classe];
    const weapon = list[Math.floor(Math.random() * list.length)];
    GAME.player.weapon = weapon;

    document.getElementById("weapon-result").innerText =
        `${weapon.nome} | Dano: ${weapon.dano}`;
}
