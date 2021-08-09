export class Pokemon {
  id: string;
  name: string;
  types: {
    type: {
      name: string;
    }
  };
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  abilities: {
    ability: {
      name: string;
    }
  };
  stats: [{
    base_stat: number;
    stat: {
      name: string;
      url: string;
    }
  }]
}
