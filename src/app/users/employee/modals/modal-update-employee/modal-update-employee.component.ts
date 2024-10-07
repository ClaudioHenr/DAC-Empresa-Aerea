import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../../shared/models/Employee.model';

@Component({
  selector: 'app-modal-update-employee',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReusableModalComponent
  ],
  templateUrl: './modal-update-employee.component.html',
  styleUrl: './modal-update-employee.component.css'
})
export class ModalUpdateEmployeeComponent {
  employee: Employee = new Employee
  
  updateEmployee() {}
}
