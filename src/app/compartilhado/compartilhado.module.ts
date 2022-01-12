import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    IncPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    IncPipe
  ]
})
export class CompartilhadoModule { }
