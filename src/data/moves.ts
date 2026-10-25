export interface MoveData {
  id: string;
  name: string;
  type: 'NORMAL' | 'FIRE' | 'WATER' | 'GRASS' | 'ELECTRIC' | 'FLYING' | 'BUG';
  power: number;
  acc: number;
  pp: number;
  status?: 'PAR' | 'SLP';
  chance?: number;
}

export const MOVES_DB: Record<string, MoveData> = {
  TACKLE:       { id: 'TACKLE',       name: 'TACKLE',       type: 'NORMAL',   power: 35, acc: 95,  pp: 35 },
  QUICK_ATTACK: { id: 'QUICK_ATTACK', name: 'QUICK ATTACK', type: 'NORMAL',   power: 40, acc: 100, pp: 30 },
  SCRATCH:      { id: 'SCRATCH',      name: 'SCRATCH',      type: 'NORMAL',   power: 40, acc: 100, pp: 35 },
  THUNDERSHOCK: { id: 'THUNDERSHOCK', name: 'THUNDERSHOCK', type: 'ELECTRIC', power: 40, acc: 100, pp: 30, status: 'PAR', chance: 0.2 },
  THUNDER_WAVE: { id: 'THUNDER_WAVE', name: 'THUNDER WAVE', type: 'ELECTRIC', power: 0,  acc: 90,  pp: 20, status: 'PAR', chance: 1.0 },
  GUST:         { id: 'GUST',         name: 'GUST',         type: 'FLYING',   power: 40, acc: 100, pp: 35 },
  VINE_WHIP:    { id: 'VINE_WHIP',    name: 'VINE WHIP',    type: 'GRASS',    power: 35, acc: 100, pp: 25 },
  SLEEP_POWDER: { id: 'SLEEP_POWDER', name: 'SLEEP POWDER', type: 'GRASS',    power: 0,  acc: 75,  pp: 15, status: 'SLP', chance: 1.0 },
  EMBER:        { id: 'EMBER',        name: 'EMBER',        type: 'FIRE',     power: 40, acc: 100, pp: 25 },
  WATER_GUN:    { id: 'WATER_GUN',    name: 'WATER GUN',    type: 'WATER',    power: 40, acc: 100, pp: 25 },
  BUBBLE:       { id: 'BUBBLE',       name: 'BUBBLE',       type: 'WATER',    power: 25, acc: 100, pp: 30 },
  BUG_BITE:     { id: 'BUG_BITE',     name: 'BUG BITE',     type: 'BUG',      power: 35, acc: 100, pp: 35 },
  HYPER_FANG:   { id: 'HYPER_FANG',   name: 'HYPER FANG',   type: 'NORMAL',   power: 50, acc: 90,  pp: 20 }
};
