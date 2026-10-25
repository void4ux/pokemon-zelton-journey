export interface SpeciesData {
  id: number;
  name: string;
  type: 'NORMAL' | 'FIRE' | 'WATER' | 'GRASS' | 'ELECTRIC' | 'FLYING' | 'BUG';
  catchRate: number;
  baseHP: number;
  baseAtk: number;
  baseDef: number;
  baseSpd: number;
  moves: string[];
  desc: string;
}

export const SPECIES_DB: Record<number, SpeciesData> = {
  25:  { id: 25,  name: 'PIKACHU',    type: 'ELECTRIC', catchRate: 190, baseHP: 38, baseAtk: 55, baseDef: 40, baseSpd: 90, moves: ['THUNDERSHOCK', 'QUICK_ATTACK', 'THUNDER_WAVE', 'TACKLE'], desc: 'Stores electricity in its electric-sac cheeks for field shocks.' },
  16:  { id: 16,  name: 'PIDGEY',     type: 'FLYING',   catchRate: 255, baseHP: 40, baseAtk: 45, baseDef: 40, baseSpd: 56, moves: ['GUST', 'TACKLE', 'QUICK_ATTACK'], desc: 'A docile forest bird Pokémon that flaps up blinding sand.' },
  19:  { id: 19,  name: 'RATTATA',    type: 'NORMAL',   catchRate: 255, baseHP: 32, baseAtk: 56, baseDef: 35, baseSpd: 72, moves: ['TACKLE', 'QUICK_ATTACK', 'HYPER_FANG'], desc: 'Cautious in the extreme. Its vitality lets it live in any habitat.' },
  10:  { id: 10,  name: 'CATERPIE',   type: 'BUG',      catchRate: 255, baseHP: 45, baseAtk: 30, baseDef: 35, baseSpd: 45, moves: ['BUG_BITE', 'TACKLE'], desc: 'Its suction-cup feet allow it to scale tall Route 1 trees.' },
  1:   { id: 1,   name: 'BULBASAUR',  type: 'GRASS',    catchRate: 140, baseHP: 45, baseAtk: 49, baseDef: 49, baseSpd: 45, moves: ['VINE_WHIP', 'TACKLE', 'SLEEP_POWDER'], desc: 'A strange nutrient-rich seed was planted on its back at birth.' },
  4:   { id: 4,   name: 'CHARMANDER', type: 'FIRE',     catchRate: 140, baseHP: 39, baseAtk: 52, baseDef: 43, baseSpd: 65, moves: ['EMBER', 'SCRATCH', 'QUICK_ATTACK'], desc: 'The flame on its tail tip indicates its life force and mood.' },
  7:   { id: 7,   name: 'SQUIRTLE',   type: 'WATER',    catchRate: 140, baseHP: 44, baseAtk: 48, baseDef: 65, baseSpd: 43, moves: ['WATER_GUN', 'BUBBLE', 'TACKLE'], desc: 'Shoots water at prey while sheltered inside its tough shell.' },
  133: { id: 133, name: 'EEVEE',      type: 'NORMAL',   catchRate: 150, baseHP: 55, baseAtk: 55, baseDef: 50, baseSpd: 55, moves: ['QUICK_ATTACK', 'TACKLE'], desc: 'An adaptable specimen whose genetic code is prized by Oak.' }
};
