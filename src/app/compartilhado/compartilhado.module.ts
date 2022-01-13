import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';
import { ObfsEmailPipe } from './pipes/obfs-email/obfs-email.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe
  ]
})
export class CompartilhadoModule { }
