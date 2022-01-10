import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule //Module responsavel por trazer o ngModel do two way databinding
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
