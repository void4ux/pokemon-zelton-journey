import { GBA_CONFIG } from '../game/config';

export function saveStateToLocal(state: unknown): boolean {
  try {
    localStorage.setItem(GBA_CONFIG.saveStorageKey, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
