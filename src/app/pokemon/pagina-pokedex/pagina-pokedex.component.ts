import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameVersao } from '../shared/model/game-versao.model';
import { Game, GerationResponse } from '../shared/model/generation-response.model';
import { Pokedex } from '../shared/model/pokedex.model';
import { Pokemon } from '../shared/model/pokemon.model';
import { PokemonService } from '../shared/service/pokemon.service';

@Component({
  selector: 'app-pagina-pokedex',
  templateUrl: './pagina-pokedex.component.html',
  styleUrls: ['./pagina-pokedex.component.css']
})
export class PaginaPokedexComponent implements OnInit {

  public geracao: string;

  public versoes: GerationResponse;
  public versaoSelecionada: Game;
  public gameVersao: GameVersao;
  public regiaoSelecionada: GameVersao;

  public pokedex: Pokedex[];

  public mostrarDialog: boolean = false;
  public pokemonSelecionado: Pokedex = new Pokedex();
  public pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.geracao = params.get('geracao');
    });
    this.obterPokemonsPelaGeracao();
  }

  public obterPokemonsPelaGeracao(): void {
    this.pokemonService.obterDadosDaGeracao(this.geracao).subscribe(res => {
      this.versoes = res;
      console.log(this.versoes);
    }, err => {

    })
  }

  public obterRegioesPelaVersao(): void {
    console.log(this.versaoSelecionada);
    
    if(this.versaoSelecionada) {
      this.pokemonService.obterRegioesPelaVersao(this.versaoSelecionada.url).subscribe(res => {
        console.log(res);
        this.gameVersao = res;
      }, err => {

      })
    }

  }

  public obterPokedexPelaRegiao(): void {
    if(this.regiaoSelecionada) {

      this.pokedex = [];
      this.pokemonService.obterPokedexPelaRegiao(this.regiaoSelecionada.url).subscribe(res => {
        this.pokedex = res;
      }, err => {

      })
    }
  }

  public mostrarDialogPokemon(pokemon: Pokedex): void {
    this.pokemonSelecionado = pokemon;
    this.mostrarDialog = true;
    this.obterDadosDoPokemonPeloId();
  }

  public obterDadosDoPokemonPeloId(): void {
    this.pokemonService.obterPokemonPeloId(this.pokemonSelecionado.pokeindex).subscribe(res => {
      this.pokemon = res;
    })
  }

  public fecharDialog(): void {
    this.pokemonSelecionado = new Pokedex();
    this.mostrarDialog = false;
    this.pokemon = new Pokemon();
  }

}
