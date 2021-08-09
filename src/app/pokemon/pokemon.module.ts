import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGeracaoComponent } from './pagina-geracao/pagina-geracao.component';
import { PaginaPokedexComponent } from './pagina-pokedex/pagina-pokedex.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginaGeracaoComponent, PaginaPokedexComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    DialogModule
  ],
  exports: [PaginaGeracaoComponent]
})
export class PokemonModule { }
