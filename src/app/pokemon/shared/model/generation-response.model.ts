export interface Game {
  name: string;
  url: string;
}

export class GerationResponse {
  version_groups: Game;
}