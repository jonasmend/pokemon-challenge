import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaGeracaoComponent } from './pokemon/pagina-geracao/pagina-geracao.component';
import { PaginaPokedexComponent } from './pokemon/pagina-pokedex/pagina-pokedex.component';

const appRoutes: Routes = [
  { path: '', component: PaginaGeracaoComponent },
  { path: ':geracao', component: PaginaPokedexComponent }
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
