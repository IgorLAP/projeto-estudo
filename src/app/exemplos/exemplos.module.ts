import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { AppGithubComponent } from './app-github/app-github.component';
import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { CriacaoObservablesComponent } from './criacao-observables/criacao-observables.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
    AppSorteioComponent,
    AppGithubComponent,
    CriacaoObservablesComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Module responsavel por trazer o ngModel do two way databinding
    ExemplosRoutingModule, //todo module precisa importar seu routing para a raiz reconhcer
    CompartilhadoModule,
    MatTableModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
