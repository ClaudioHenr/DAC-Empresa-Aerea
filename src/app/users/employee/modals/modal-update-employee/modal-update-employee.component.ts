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
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.employeeId) {
      this.fetchEmployeeDetails();
    }
  }

  fetchEmployeeDetails(): void {
    this.http.get<Employee>(`http://localhost:3000/employees/${this.employeeId}`)
      .subscribe(data => {
        this.employee = data;
      },
      error => {
        console.error('Erro ao buscar detalhes do funcionário', error);
      });
  }

  updateEmployee(): void {
    if (this.isFormValid()) {
      this.http.put(`http://localhost:3000/employees/update/${this.employeeId}`, this.employee).subscribe(
        response => {
          console.log('Employee updated successfully', response);
          window.location.reload();
        },
        error => {
          console.error('Error updating employee', error);
        }
      );
    } else {
      this.errorMessage = 'Todos os campos são obrigatórios.';
    }
  }

  isFormValid(): boolean {
    return !!this.employee.name && !!this.employee.email && !!this.employee.number;
  }

  formatPhone(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    }
    if (value.length > 7) {
      value = value.replace(/^(\(\d{2}\)) (\d{1})(\d)/, '$1 $2 $3');
    }
    if (value.length > 12) {
      value = value.replace(/^(\(\d{2}\)) (\d{1}) (\d{4})(\d)/, '$1 $2 $3-$4');
    }
    event.target.value = value;
  }
}