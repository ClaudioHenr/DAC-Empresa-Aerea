import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor } from '@angular/common';
import { ModalInsertEmployeeComponent } from "../modals/modal-insert-employee/modal-insert-employee.component";
import { ModalUpdateEmployeeComponent } from "../modals/modal-update-employee/modal-update-employee.component";
import { ModalDeleteEmployeeComponent } from "../modals/modal-delete-employee/modal-delete-employee.component";

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
    CommonModule,
    ModalInsertEmployeeComponent,
    ModalUpdateEmployeeComponent,
    ModalDeleteEmployeeComponent
],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees = [
    { nome: 'Guilherme Franco Batista', cpf: '111.111.111-11', email: 'triplogamer@gmail.com', telefone: '(41) 9 9999-9999' },
    { nome: 'Ana Paula Silva', cpf: '222.222.222-22', email: 'ana.silva@gmail.com', telefone: '(11) 9 8888-8888' },
    { nome: 'Marcos Souza Lima', cpf: '333.333.333-33', email: 'marcos.souza@gmail.com', telefone: '(21) 9 7777-7777' },
    { nome: 'Joana Costa Ferreira', cpf: '444.444.444-44', email: 'joana.ferreira@gmail.com', telefone: '(31) 9 6666-6666' },
    { nome: 'Pedro Santos Oliveira', cpf: '555.555.555-55', email: 'pedro.oliveira@gmail.com', telefone: '(41) 9 5555-5555' },
    { nome: 'Paula Lima Santos', cpf: '666.666.666-66', email: 'paula.santos@gmail.com', telefone: '(81) 9 4444-4444' },
    { nome: 'Lucas Souza Ferreira', cpf: '777.777.777-77', email: 'lucas.ferreira@gmail.com', telefone: '(91) 9 3333-3333' }
  ];

}
