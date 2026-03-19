const SKILLS = {

Combatente: [

{ id:"armamento_pesado", tipo:"passiva",
efeito:p=> p.danoArma += 2 },

{ id:"artista_marcial_cmb", tipo:"passiva",
efeito:p=> p.danoDesarmado = "1d6" },

{ id:"ataque_oportunidade", tipo:"ativa", custoPE:1,
efeito:(p,e)=> e.hp -= 4 },

{ id:"combate_duas_armas", tipo:"passiva",
efeito:p=> p.multiAtaque = true },

{ id:"combate_defensivo", tipo:"ativa", custoPE:1,
efeito:p=> p.defesa += 5 },

{ id:"golpe_demolidor", tipo:"ativa", custoPE:2,
efeito:(p,e)=> e.hp -= 10 },

{ id:"golpe_pesado", tipo:"passiva",
efeito:p=> p.danoArma += 3 },

{ id:"incansavel", tipo:"ativa", custoPE:2,
efeito:p=> p.turnoExtra = true },

{ id:"presteza_atletica", tipo:"ativa", custoPE:1,
efeito:p=> p.criticoChance += 0.2 },

{ id:"protecao_pesada", tipo:"passiva",
efeito:p=> p.defesa += 2 },

{ id:"reflexos_defensivos", tipo:"passiva",
efeito:p=> p.defesa += 2 },

{ id:"saque_rapido", tipo:"passiva",
efeito:p=> p.acaoExtraItem = true },

{ id:"sentido_tatico", tipo:"ativa", custoPE:2,
efeito:p=> { p.defesa += 3; p.resistencia += 3 } },

{ id:"tanque_guerra", tipo:"passiva",
efeito:p=> { p.hpMax += 10; p.defesa += 2 } }

],

Especialista: [

{ id:"artista_marcial_esp", tipo:"passiva",
efeito:p=> p.danoDesarmado = "1d6" },

{ id:"balistica_avancada", tipo:"passiva",
efeito:p=> p.danoArma += 3 },

{ id:"conhecimento_aplicado", tipo:"ativa", custoPE:2,
efeito:p=> p.criticoChance += 0.3 },

{ id:"hacker", tipo:"passiva",
efeito:p=> p.bonusCritico += 2 },

{ id:"maos_rapidas", tipo:"ativa", custoPE:1,
efeito:p=> p.turnoExtra = true },

{ id:"mochila_utilidades", tipo:"passiva",
efeito:p=> p.capacidadeInventario += 2 },

{ id:"movimento_tatico", tipo:"ativa", custoPE:1,
efeito:p=> p.esquiva = true },

{ id:"na_trilha_certa", tipo:"ativa", custoPE:1,
efeito:p=> p.bonusDano += 3 },

{ id:"nerd", tipo:"ativa", custoPE:2,
efeito:p=> p.pe += 3 },

{ id:"ninja_urbano", tipo:"passiva",
efeito:p=> p.criticoChance += 0.1 }

],

Ocultista: [

{ id:"escolhido_pelo_outro_lado", tipo:"passiva",
efeito:p=> p.podeUsarRitual = true },

{ id:"guiado_pelo_paranormal", tipo:"ativa", custoPE:2,
efeito:p=> p.turnoExtra = true },

{ id:"identificacao_paranormal", tipo:"passiva",
efeito:p=> p.danoRitual += 2 },

{ id:"improvisar_componentes", tipo:"passiva",
efeito:p=> p.custoRitual -= 1 },

{ id:"intuicao_paranormal", tipo:"passiva",
efeito:p=> p.criticoChance += 0.1 },

{ id:"especialista_em_elemento", tipo:"passiva",
efeito:p=> p.danoRitual += 3 },

{ id:"mestre_em_elemento", tipo:"passiva",
efeito:p=> p.custoRitual -= 1 },

{ id:"ritual_potente", tipo:"passiva",
efeito:p=> p.danoRitual += 4 },

{ id:"ritual_predileto", tipo:"passiva",
efeito:p=> p.custoRitual -= 1 },

{ id:"tatuagem_ritualistica", tipo:"passiva",
efeito:p=> p.custoRitual -= 1 },

{ id:"camuflar_ocultismo", tipo:"ativa", custoPE:2,
efeito:p=> p.defesa += 4 },

{ id:"criar_selo", tipo:"passiva",
efeito:p=> p.selos = true },

{ id:"envolto_em_misterio", tipo:"passiva",
efeito:p=> p.defesa += 2 },

{ id:"ferramentas_paranormais", tipo:"passiva",
efeito:p=> p.ritualGratis = true },

{ id:"fluxo_de_poder", tipo:"passiva",
efeito:p=> p.multiRitual = true }

]

};

const WEAPONS = {
Combatente:[{nome:"Espada", dano:"1d8"}],
Especialista:[{nome:"Pistola", dano:"1d8"}],
Ocultista:[{nome:"Adaga", dano:"1d6"}]
};
