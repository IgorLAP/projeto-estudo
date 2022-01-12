import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pipes',
  templateUrl: './criacao-pipes.component.html',
  styleUrls: ['./criacao-pipes.component.scss']
})
export class CriacaoPipesComponent implements OnInit {

  query: string = '';

  linguagens = [
    'Python',
    'Ruby',
    'Typescript',
    'Perl',
    'Haskell',
    'C++',
    'C#',
    'C',
    'Rust',
    'Java',
    'Go',
    'PHP',
    'Cobol',
    'Javascript',
    'Clojure',
    'Julia',
    'Fortran',
    'Lua',
    'Kotlin',
    'VisualG',
    'Portugol',
    'Elixir',
    'Swift',
  ];

  numeros: number[] = [1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.numeros);
    this.numeros = [...this.numeros, 1]; //Muda a referência, pois está gerando um array do 0
    // this.numeros.push(1); //Alteração não muda a referência
  }

}
