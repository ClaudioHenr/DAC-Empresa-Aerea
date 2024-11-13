import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../../shared/models/Employee.model';
import { NgIf } from '@angular/common';

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
export class ModalUpdateEmployeeComponent implements OnInit {
  @Input() employeeId?: string;
  employee: Employee = new Employee();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ModalUpdateEmployeeComponent initialized with employeeId:', this.employeeId);
    if (this.employeeId) {
      this.fetchEmployeeDetails();
    }
  }

  fetchEmployeeDetails(): void {
    this.http.get<{ Employees: Employee[] }>(`http://localhost:3000/employees/${this.employeeId}`)
      .subscribe(data => {
        if (data.Employees && data.Employees.length > 0) {
          this.employee = data.Employees[0];
        }
      },
      error => {
        console.error('Erro ao buscar detalhes do funcionário', error);
      }
    );
  }

  updateEmployee(): void {
    this.http.put(`http://localhost:3000/employees/${this.employeeId}`, this.employee).subscribe(
      response => {
        console.log('Employee updated successfully', response);
      },
      error => {
        console.error('Error updating employee', error);
      }
    );
  }
}