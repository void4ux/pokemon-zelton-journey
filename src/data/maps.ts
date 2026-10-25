export interface WarpTrigger {
  x: number;
  y: number;
  toMap: string;
  toX: number;
  toY: number;
  toDir: number;
}

export interface SignTrigger {
  x: number;
  y: number;
  text: string[];
  heal?: boolean;
  machine?: boolean;
}

export interface NpcPlacement {
  id: string;
  name: string;
  sprite: string;
  x: number;
  y: number;
  dir: number;
  role: string;
}

export interface MapDefinition {
  id: string;
  name: string;
  bgm: string;
  encounterRate: number;
  rows: string[];
  warps: WarpTrigger[];
  signs: SignTrigger[];
  npcs: NpcPlacement[];
}
