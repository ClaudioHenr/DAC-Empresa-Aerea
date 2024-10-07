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

}
