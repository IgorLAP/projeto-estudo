import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { ExemplosModule } from './exemplos/exemplos.module';
// import { ExerciciosModule } from './exercicios/exercicios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //seriam necessários se postos direto pelos componenets, com o lazy loading (roteamento) eles saem e entra a classe do routing
    // ExemplosModule,
    // ExerciciosModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
