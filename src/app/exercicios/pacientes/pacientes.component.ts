import { Component, OnInit } from '@angular/core';

import { pacientes } from '../pacientes/models/pacientes';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: pacientes[] = [
    {_idPaciente: 1, nomePaciente: 'Igor Pedrosa', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
    {_idPaciente: 2, nomePaciente: 'Igor Pedrosa2', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
    {_idPaciente: 3, nomePaciente: 'Igor Pedrosa3', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
    {_idPaciente: 4, nomePaciente: 'Igor Pedrosa4', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
    {_idPaciente: 5, nomePaciente: 'Igor Pedrosa5', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
    {_idPaciente: 6, nomePaciente: 'Igor Pedrosa6', emailPaciente: 'narutinho@gmail.com', telefonePaciente: '4002-8922', cepPaciente: '00-000.00', cpfPaciente: '111-111-111.11'},
  ];

  newPaciente: pacientes = {} as pacientes;

  constructor() { }

  ngOnInit(): void {
  }

  adicionarPaciente(){
    // os () aqui super importantes pois evitam a alteração do valor direto e sim apartir da nova variavel
    this.newPaciente._idPaciente = (this.pacientes[this.pacientes.length - 1]._idPaciente) + 1;
    this.pacientes.push(this.newPaciente);
    this.newPaciente  = {} as pacientes;
  }

  deletar(id: number){
    this.pacientes.splice(this.pacientes.findIndex(i=>i._idPaciente === id),1);
  }

}
