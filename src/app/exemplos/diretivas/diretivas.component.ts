import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent implements OnInit {
  oculto: boolean = false;

  compras = ['Arroz', 'Carne', 'Tempero'];

  alimento: string = '';

  status: string = 'loading';

  constructor() {}

  ngOnInit(): void {}

  ocultar() {
    this.oculto = !this.oculto;
  }

  adicionar() {
    if (this.alimento != '') {
      this.compras.push(this.alimento);
      this.alimento = '';
    }
  }

}
