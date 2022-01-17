import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    //necessário para tipar requisições http, como o service está providIn root ele procura aqui para não dar erro
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
