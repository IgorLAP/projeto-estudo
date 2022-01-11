import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercioDoisComponent } from './exercio-dois/exercio-dois.component';
import { PacientesComponent } from './pacientes/pacientes.component';

//todas rotas desse module
const routes: Route[] = [
  {
    //caminho do component
    path: 'exercicio-um',
    //onde ele se encontra na arquiterura
    component: ExercicioUmComponent,
  },
  {
    path: 'exercicio-dois',
    component: ExercioDoisComponent
  },
  {
    path: 'pratico-pacientes',
    component: PacientesComponent
  }
];

@NgModule({
  //metadados, imports e exports, padrões/necessários para o roteamento
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
