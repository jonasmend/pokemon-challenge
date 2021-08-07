import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/service/pokemon.service';

@Component({
  selector: 'app-pagina-pokedex',
  templateUrl: './pagina-pokedex.component.html',
  styleUrls: ['./pagina-pokedex.component.css']
})
export class PaginaPokedexComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

}
