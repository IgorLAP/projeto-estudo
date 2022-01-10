import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercioDoisComponent } from './exercio-dois/exercio-dois.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercioDoisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercioDoisComponent
  ]
})
export class ExerciciosModule { }
