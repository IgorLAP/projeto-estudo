import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Placeholder } from '../../models/placeholder';
import { PlaceholderService } from './../../services/placeholder.service';

@Component({
  selector: 'app-criacao-observables',
  templateUrl: './criacao-observables.component.html',
  styleUrls: ['./criacao-observables.component.scss']
})
export class CriacaoObservablesComponent implements OnInit {

  apiCall$: Observable<Placeholder[]>;//Observable<Placeholder[]>;
  displayedColumns = ['id', 'name', 'username', 'email']

  constructor
  (
    private placeholderService: PlaceholderService,
  ) {
    this.apiCall$ = this.placeholderService.getJson()
    .pipe(
      catchError(error=>{
        return of ([])
      })
    )
  }

  ngOnInit(): void {
  }

}
