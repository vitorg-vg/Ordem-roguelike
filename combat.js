function rollDice(dice) {

    const [q, f] = dice.split("d").map(Number);
    let total = 0;

    for (let i = 0; i < q; i++) {
        total += Math.floor(Math.random() * f) + 1;
    }

    return total;
}

function startBattle() {

    showScreen("screen-battle");

    GAME.enemy = {
        nome: "Zumbi Beta",
        hp: 40,
        maxHp: 40,
        dano: "1d6"
    };

    document.getElementById("classText").innerText =
        GAME.player.classe;

    updateEnemyUI();
}

function updateEnemyUI() {

    document.getElementById("enemyName").innerText =
        GAME.enemy.nome;

    const percent =
        (GAME.enemy.hp / GAME.enemy.maxHp) * 100;

    document.getElementById("enemy-health-bar")
        .style.width = percent + "%";
}

function playerAttack() {

    const damage = rollDice(GAME.player.weapon.dano);
    GAME.enemy.hp -= damage;

    updateEnemyUI();

    if (GAME.enemy.hp <= 0) {
        alert("Vitória!");
        location.reload();
        return;
    }

    enemyAttack();
}

function useSkill() {

    if (GAME.player.pe < GAME.player.skill.custoPE) {
        alert("PE insuficiente!");
        return;
    }

    GAME.player.pe -= GAME.player.skill.custoPE;

    let damage =
        rollDice(GAME.player.weapon.dano) +
        GAME.player.skill.bonus;

    GAME.enemy.hp -= damage;

    updateEnemyUI();

    if (GAME.enemy.hp <= 0) {
        alert("Vitória!");
        location.reload();
        return;
    }

    enemyAttack();
}

function enemyAttack() {

    const damage = rollDice(GAME.enemy.dano);
    GAME.player.hp -= damage;

    document.getElementById("hpText").innerText =
        GAME.player.hp;

    if (GAME.player.hp <= 0) {
        alert("Você morreu!");
        location.reload();
    }
}
