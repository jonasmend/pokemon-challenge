import { Component, OnInit } from '@angular/core';
import { Geration } from '../shared/model/geration';
import { PokemonService } from '../shared/service/pokemon.service';

@Component({
  selector: 'app-pagina-geracao',
  templateUrl: './pagina-geracao.component.html',
  styleUrls: ['./pagina-geracao.component.css']
})
export class PaginaGeracaoComponent implements OnInit {

  public geracoes: Geration[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.obterTodasAsGeracoes();
  }

  public obterTodasAsGeracoes(): void {
    this.pokemonService.obterTodasAsGeracoes().subscribe((res) => {
      console.log(res);
      this.geracoes = res;
    }, (err) => {
      console.log(err.status);
    })
  }

  public alerta(url: string): void {
    alert(url);
  }
}
