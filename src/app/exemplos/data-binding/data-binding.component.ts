import { Student } from './models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  name = 'Igor Pedrosa';
  idade = 24;
  link = 'https://google.com/google.jpg';
  nomeCompleto = 'João';
  estudante: Student = {} as Student; //as Student faz o type n reclamar já que não estamos adicionando as propriedades typadas

  constructor() { }

  ngOnInit(): void {
  }

  alerta(){
    alert('naruto');
  }

}
