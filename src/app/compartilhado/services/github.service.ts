import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from './../../exemplos/app-github/models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  //boa pratica com apis
  private readonly baseUrl =  'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(username: string): Observable<Repository[]>{
    const url = `${this.baseUrl}/users/${username}/repos`;
    //o retorno dessa chamada ao metodo get do http, será do tipo Repository[] | tipagem generic ao lado dos parenteses
    return this.http.get<Repository[]>(url);
  }
}
