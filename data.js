const CLASS_SKILLS = {

    Combatente: [
        { nome: "Ataque Pesado", custoPE: 2, bonus: 4 },
        { nome: "Postura Defensiva", custoPE: 0, bonus: 0 }
    ],

    Especialista: [
        { nome: "Tiro Preciso", custoPE: 2, bonus: 5 },
        { nome: "Análise Tática", custoPE: 0, bonus: 0 }
    ],

    Ocultista: [
        { nome: "Chama Paranormal", custoPE: 3, bonus: 6 },
        { nome: "Mente Expandida", custoPE: 0, bonus: 0 }
    ]
};

const WEAPONS = {

    Combatente: [
        { nome: "Espada", dano: "1d8" },
        { nome: "Machado", dano: "1d10" }
    ],

    Especialista: [
        { nome: "Pistola", dano: "1d8" },
        { nome: "Fuzil", dano: "1d10" }
    ],

    Ocultista: [
        { nome: "Adaga Ritualística", dano: "1d6" },
        { nome: "Cajado Arcano", dano: "1d8" }
    ]
};
