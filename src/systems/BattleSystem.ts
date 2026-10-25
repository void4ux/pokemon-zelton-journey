import { PokemonInstance, PokemonMoveInstance } from '../entities/Pokemon';

export const TYPE_CHART: Record<string, Record<string, number>> = {
  NORMAL:   { ROCK: 0.5, GHOST: 0 },
  FIRE:     { GRASS: 2.0, BUG: 2.0, WATER: 0.5, FIRE: 0.5 },
  WATER:    { FIRE: 2.0, WATER: 0.5, GRASS: 0.5 },
  GRASS:    { WATER: 2.0, FIRE: 0.5, GRASS: 0.5, FLYING: 0.5, BUG: 0.5 },
  ELECTRIC: { WATER: 2.0, FLYING: 2.0, GRASS: 0.5, ELECTRIC: 0.5 },
  FLYING:   { GRASS: 2.0, BUG: 2.0, ELECTRIC: 0.5 },
  BUG:      { GRASS: 2.0, FIRE: 0.5, FLYING: 0.5 }
};

export function calculateDamage(attacker: PokemonInstance, defender: PokemonInstance, move: PokemonMoveInstance) {
  if (!move.power || move.power <= 0) return { damage: 0, eff: 1.0, crit: false };
  const levelFactor = Math.floor((2 * attacker.level) / 5) + 2;
  const base = Math.floor(Math.floor(levelFactor * move.power * (attacker.atk / Math.max(1, defender.def))) / 50) + 2;
  const stab = attacker.type === move.type ? 1.5 : 1.0;
  const eff = TYPE_CHART[move.type]?.[defender.type] ?? 1.0;
  const crit = Math.random() < 0.08 ? 1.5 : 1.0;
  const rand = 0.85 + Math.random() * 0.15;
  const damage = Math.max(1, Math.floor(base * stab * eff * crit * rand));
  return { damage, eff, crit: crit > 1.0 };
}
