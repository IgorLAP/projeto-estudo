import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { ExercioDoisComponent } from './exercio-dois/exercio-dois.component';
import { PacientesComponent } from './pacientes/pacientes.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule, //todo module precisa importar seu routing para a raiz reconhcer
    FormsModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercioDoisComponent
  ]
})
export class ExerciciosModule { }
