import { Component, OnInit } from '@angular/core';

import { GithubService } from './../../compartilhado/services/github.service';
import { Repository } from './models/repository';

@Component({
  selector: 'app-app-github',
  templateUrl: './app-github.component.html',
  styleUrls: ['./app-github.component.scss']
})
export class AppGithubComponent implements OnInit {

  username: string = '';
  repositories: Repository[] = [];
  loading: boolean = false;
  error: boolean = false;
  msgUsuario: string = '';

  getUserRepositories(){
    if(this.username.length > 0){
      this.loading = true;
      this.githubService.getUserRepositories(this.username).subscribe({
        next: (data) => {
          this.loading = false;
          this.repositories = data;
        },
        error: (err) => {
          this.loading = false;
          this.error = true;
          this.repositories = [];
          if(err.status === 404){
            this.msgUsuario = `${this.username} ${err.statusText}`;
          }
          console.error(err);
        }
      })
    }
  }

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
