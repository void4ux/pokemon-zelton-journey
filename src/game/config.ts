export interface GameConfig {
  logicalWidth: number;
  logicalHeight: number;
  tileSize: number;
  saveStorageKey: string;
}

export const GBA_CONFIG: GameConfig = {
  logicalWidth: 240,
  logicalHeight: 160,
  tileSize: 16,
  saveStorageKey: 'POKEMON_ZELTON_JOURNEY_SAVE_V1'
};
