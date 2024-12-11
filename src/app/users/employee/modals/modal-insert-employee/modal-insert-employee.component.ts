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
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  createEmployee() {
    if (this.isFormValid()) {
      this.http.post('http://localhost:3000/employees/create', this.employee).subscribe(
        response => {
          console.log('Employee registered successfully', response);
          window.location.reload();
        },
        error => {
          console.error('Error registering employee', error);
        }
      );
    } else {
      this.errorMessage = 'Todos os campos são obrigatórios.';
    }
  }

  isFormValid(): boolean {
    return !!this.employee.name && !!this.employee.cpf && !!this.employee.email && !!this.employee.number;
  }

  formatCPF(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (value.length > 7) {
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 11) {
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    event.target.value = value;
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