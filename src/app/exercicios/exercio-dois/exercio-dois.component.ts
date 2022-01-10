import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercio-dois',
  templateUrl: './exercio-dois.component.html',
  styleUrls: ['./exercio-dois.component.scss']
})
export class ExercioDoisComponent implements OnInit {
  idade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  aumentar(){
    this.idade++;
  }
  diminuir(){
    if(this.idade !== 0) this.idade--;
  }

}
