import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


//todas rotas desse module
const routes: Route[] = [
  //configuraçã das rotas no app raiz usando a função para trazer uma Promisse dos modules
  {
    path: 'exemplos',
    loadChildren: ()=> import('./exemplos/exemplos.module').then(m=>m.ExemplosModule)
  },
  {
    path: 'exercicios',
    loadChildren: ()=> import('./exercicios/exercicios.module').then(m=>m.ExerciciosModule)
  }
];

@NgModule({
  //metadados, imports e exports, padrões/necessários para o roteamento
  //forRoot no raiz, forChild nos modules
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
