import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../../shared/models/Employee.model';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal-insert-employee',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink,
    ReusableModalComponent
  ],
  templateUrl: './modal-insert-employee.component.html',
  styleUrl: './modal-insert-employee.component.css'
})
export class ModalInsertEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private http: HttpClient) {}

  registerEmployee() {
    this.http.post('http://localhost:3000/employees', this.employee).subscribe(
      response => {
        console.log('Employee registered successfully', response);
      },
      error => {
        console.error('Error registering employee', error);
      }
    );
  }
}