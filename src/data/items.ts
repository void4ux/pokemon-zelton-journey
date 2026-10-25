export interface ItemData {
  id: string;
  name: string;
  type: 'BALL' | 'HEAL' | 'KEY';
  mult?: number;
  heal?: number;
  desc: string;
}

export const ITEMS_DB: Record<string, ItemData> = {
  POKE_BALL:  { id: 'POKE_BALL',  name: 'POKé BALL',      type: 'BALL', mult: 1.4, desc: 'A tool for catching wild POKéMON.' },
  GREAT_BALL: { id: 'GREAT_BALL', name: 'GREAT BALL',     type: 'BALL', mult: 2.2, desc: 'High-performance ball with higher catch rate.' },
  POTION:     { id: 'POTION',     name: 'POTION',         type: 'HEAL', heal: 20,  desc: 'Restores a POKéMON HP by 20 points.' },
  OAK_CHARM:  { id: 'OAK_CHARM',  name: 'MASTER DIPLOMA', type: 'KEY',  desc: 'Prof. Oak award for completing the 6-Specimen Quest!' }
};
