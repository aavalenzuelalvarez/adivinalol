export type Champ = {
    id: string,
    key: string,
    name: string,
    title: string,
    tags:string[],
    stats: ChampionStats,
    icon: string,
    sprite: Sprite,
    description: string,
}

type ChampionStats = {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

type Sprite = {
    url: string;
    x: number;
    y: number;
}
