import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Geration } from '../model/geration';

interface GenerationResponse {
  count: number;
  results : Geration[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private link: string = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }

  public obterTodasAsGeracoes(): Observable<Geration[]> {
    return this.httpClient.get<GenerationResponse>(`${this.link}/generation`).pipe(
      map(res => {
        return res.results;
      })
    );
  }

  public obterDadosDaGeracao(nomeDaGeracao: string): Observable<any> {
    return this.httpClient.get<any>(`${this.link}/generation/${nomeDaGeracao}`);
  }

  public obterPokemonsPelaGeracao(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }
}
