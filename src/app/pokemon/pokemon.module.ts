import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGeracaoComponent } from './pagina-geracao/pagina-geracao.component';
import { PaginaPokedexComponent } from './pagina-pokedex/pagina-pokedex.component';



@NgModule({
  declarations: [PaginaGeracaoComponent, PaginaPokedexComponent],
  imports: [
    CommonModule
  ],
  exports: [PaginaGeracaoComponent]
})
export class PokemonModule { }
