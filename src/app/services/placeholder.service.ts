import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Placeholder } from '../models/placeholder';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private readonly urlAPI = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getJson(){
    return this.http.get<Placeholder[]>(this.urlAPI)
    .pipe(
      delay(3000),
      first(),
      tap((pretty => console.log(pretty)))
    )
  }


}
