import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameVersao } from '../model/game-versao.model';
import { GerationResponse } from '../model/generation-response.model';
import { Geration } from '../model/generation.model';
import { Pokedex } from '../model/pokedex.model';
import { Pokemon } from '../model/pokemon.model';

interface GenerationResponse {
  count: number;
  results : Geration[];
}

interface PokemonSpeciesResponse {
  name: string;
  url: string;
}

interface PokedexRegionReponse {
  name: string;
  pokemon_entries: [
    {
      entry_number: number;
      pokemon_species: PokemonSpeciesResponse
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private link: string = 'https://pokeapi.co/api/v2';
  private linkImagemPokemon: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private linkImagemPokemonShiny: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';

  constructor(private httpClient: HttpClient) { }

  public obterTodasAsGeracoes(): Observable<Geration[]> {
    return this.httpClient.get<GenerationResponse>(`${this.link}/generation`).pipe(
      map(res => {
        return res.results;
      })
    );
  }

  public obterDadosDaGeracao(nomeDaGeracao: string): Observable<GerationResponse> {
    return this.httpClient.get<GerationResponse>(`${this.link}/generation/${nomeDaGeracao}`);
  }

  public obterPokemonsPelaGeracao(url: string): Observable<GerationResponse> {
    return this.httpClient.get<GerationResponse>(url);
  }

  public obterRegioesPelaVersao(url: string): Observable<GameVersao> {
    return this.httpClient.get<any>(url);
  }

  public obterPokemonPeloId(id: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.link}/pokemon/${id}`);
  }

  public obterPokedexPelaRegiao(url: string): Observable<Pokedex[]> {
    return this.httpClient.get<PokedexRegionReponse>(url).pipe(
      map(pokedex => {
        return pokedex.pokemon_entries;
      }),
      map(pokemon => {
        return pokemon.map((poke) => {
          const route = '/pokemon-species/'
          const url = poke.pokemon_species.url;
          const cod = url.slice(url.indexOf(route) + route.length, url.lastIndexOf('/'))

          const newPokedexObj: Pokedex = {
            entry_number: poke.entry_number,
            image: this.obterImagemDoPokemon(cod),
            shiny: this.obterImagemDoPokemonShiny(cod),
            pokeindex: cod,
            pokemon_species: {...poke.pokemon_species,
              name: poke.pokemon_species.name.charAt(0).toUpperCase()
                + poke.pokemon_species.name.slice(1)
            }
          };

          return newPokedexObj;
        });
      })
    );
  }

  public obterImagemDoPokemon(indicePokemon: string): string {
    return `${this.linkImagemPokemon}${indicePokemon}.png`
  }

  public obterImagemDoPokemonShiny(indicePokemon: string): string {
    return `${this.linkImagemPokemonShiny}${indicePokemon}.png`
  }
}
