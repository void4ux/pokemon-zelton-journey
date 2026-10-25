export interface EncounterSlot {
  speciesId: number;
  minLv: number;
  maxLv: number;
  weight: number;
}

export const ROUTE_1_ENCOUNTERS: EncounterSlot[] = [
  { speciesId: 16,  minLv: 2, maxLv: 4, weight: 20 },
  { speciesId: 19,  minLv: 2, maxLv: 4, weight: 18 },
  { speciesId: 10,  minLv: 2, maxLv: 4, weight: 15 },
  { speciesId: 1,   minLv: 3, maxLv: 5, weight: 13 },
  { speciesId: 4,   minLv: 3, maxLv: 5, weight: 13 },
  { speciesId: 7,   minLv: 3, maxLv: 5, weight: 13 },
  { speciesId: 133, minLv: 4, maxLv: 5, weight: 8  }
];
