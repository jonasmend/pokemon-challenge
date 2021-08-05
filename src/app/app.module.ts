import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { PokemonModule } from './pokemon/pokemon.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PokemonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
