import { PokemonInstance } from '../entities/Pokemon';
import { SPECIES_DB } from '../data/species';
import { ITEMS_DB } from '../data/items';

export function computeCaptureResult(target: PokemonInstance, ballId: string) {
  const ball = ITEMS_DB[ballId] || ITEMS_DB.POKE_BALL;
  const sp = SPECIES_DB[target.speciesId];
  const hpFactor = (3 * target.maxHp - 2 * target.hp) / (3 * target.maxHp);
  const statusBonus = target.status ? 1.65 : 1.0;
  const score = hpFactor * (sp ? sp.catchRate : 190) * (ball.mult || 1.4) * statusBonus;
  const prob = Math.min(0.97, Math.max(0.32, score / 220));
  const caught = Math.random() < prob;
  const shakes = caught ? 3 : Math.floor(Math.random() * 3) + 1;
  return { caught, shakes, probability: prob };
}
