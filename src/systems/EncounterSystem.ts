import { ROUTE_1_ENCOUNTERS } from '../data/encounters';
import { createPokemon, PokemonInstance } from '../entities/Pokemon';

export function rollWildEncounter(): PokemonInstance {
  const total = ROUTE_1_ENCOUNTERS.reduce((acc, s) => acc + s.weight, 0);
  let r = Math.random() * total;
  let picked = ROUTE_1_ENCOUNTERS[0];
  for (const slot of ROUTE_1_ENCOUNTERS) {
    if (r < slot.weight) {
      picked = slot;
      break;
    }
    r -= slot.weight;
  }
  const lv = picked.minLv + Math.floor(Math.random() * (picked.maxLv - picked.minLv + 1));
  return createPokemon(picked.speciesId, lv, 'ROUTE 1', 0, false);
}
