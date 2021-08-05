import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGeracaoComponent } from './pagina-geracao/pagina-geracao.component';



@NgModule({
  declarations: [PaginaGeracaoComponent],
  imports: [
    CommonModule
  ],
  exports: [PaginaGeracaoComponent]
})
export class PokemonModule { }
