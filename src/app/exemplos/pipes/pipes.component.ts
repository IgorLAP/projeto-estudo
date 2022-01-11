import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'Igor Pedrosa';
  percentual = 0.557865;
  salario = 300;
  user = {
    id: 0,
    name: 'igor'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
