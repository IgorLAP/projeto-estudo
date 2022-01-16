import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AbbvPipe } from './pipes/abbv/abbv.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';
import { ObfsEmailPipe } from './pipes/obfs-email/obfs-email.pipe';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { CensorPipe } from './pipes/censor/censor.pipe';
import { TimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { PercentagePipe } from './pipes/percentage/percentage.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe,
    AbbvPipe,
    EllipsisPipe,
    CensorPipe,
    TimeAgoPipe,
    PercentagePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe,
    AbbvPipe,
    EllipsisPipe,
    CensorPipe,
    TimeAgoPipe,
    PercentagePipe
  ]
})
export class CompartilhadoModule { }
