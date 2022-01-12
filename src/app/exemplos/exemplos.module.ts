import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { PipesComponent } from './pipes/pipes.component';




@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Module responsavel por trazer o ngModel do two way databinding
    ExemplosRoutingModule, //todo module precisa importar seu routing para a raiz reconhcer
    CompartilhadoModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
