import { SPECIES_DB } from '../data/species';
import { MOVES_DB } from '../data/moves';

export interface PokemonMoveInstance {
  id: string;
  name: string;
  type: string;
  power: number;
  acc: number;
  pp: number;
  maxPp: number;
  status: string | null;
  chance: number;
}

export interface PokemonInstance {
  uid: string;
  speciesId: number;
  speciesName: string;
  nickname: string;
  type: string;
  level: number;
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  spd: number;
  status: string | null;
  moves: PokemonMoveInstance[];
  captureLocation: string;
  captureOrder: number;
  isStarter: boolean;
  transferred: boolean;
}

export function createPokemon(speciesId: number, level: number, locationName: string, captureOrder = 0, isStarter = false): PokemonInstance {
  const sp = SPECIES_DB[speciesId];
  const maxHp = Math.floor(((sp.baseHP * 2 + 24) * level) / 100) + level + 12;
  const atk = Math.floor(((sp.baseAtk * 2 + 16) * level) / 100) + 6;
  const def = Math.floor(((sp.baseDef * 2 + 16) * level) / 100) + 6;
  const spd = Math.floor(((sp.baseSpd * 2 + 16) * level) / 100) + 6;
  const moves = sp.moves.slice(0, 4).map(mId => {
    const m = MOVES_DB[mId];
    return { id: m.id, name: m.name, type: m.type, power: m.power, acc: m.acc, pp: m.pp, maxPp: m.pp, status: m.status || null, chance: m.chance || 0 };
  });
  return {
    uid: `pkm_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    speciesId: sp.id,
    speciesName: sp.name,
    nickname: sp.name,
    type: sp.type,
    level,
    hp: maxHp,
    maxHp,
    atk,
    def,
    spd,
    status: null,
    moves,
    captureLocation: locationName,
    captureOrder,
    isStarter,
    transferred: false
  };
}
