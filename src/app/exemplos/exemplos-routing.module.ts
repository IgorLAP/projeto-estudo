import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';

//todas rotas desse module
const routes: Route[] = [
  {
    //caminho do component
    path: 'data-binding',
    //onde ele se encontra na arquiterura
    component: DataBindingComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  //metadados, imports e exports, padrões/necessários para o roteamento
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
