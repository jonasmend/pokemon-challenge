export interface PokemonSpecies {
  name: string;
  url: string;
}

export class PokemonEntries {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}