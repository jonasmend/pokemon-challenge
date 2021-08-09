export interface PokedexRegiao {
  name: string;
  url: string;
}

export class GameVersao {
  name: string;
  url: string;
  pokedexes: PokedexRegiao[];
}