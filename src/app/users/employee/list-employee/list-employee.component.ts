import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';
import { ModalInsertEmployeeComponent } from "../modals/modal-insert-employee/modal-insert-employee.component";
import { ModalUpdateEmployeeComponent } from "../modals/modal-update-employee/modal-update-employee.component";
import { ModalDeleteEmployeeComponent } from "../modals/modal-delete-employee/modal-delete-employee.component";

interface Employee {
  id: string;
  name: string;
  cpf: string;
  email: string;
  number: string;
  status: string;
}

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
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployeeId?: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<{ employees: Employee[] }>('http://localhost:3000/employees')
      .subscribe(data => {
        this.employees = data.employees;
      });
  }

  getDeactivatedEmployees(): Employee[] {
    return this.employees.filter(employee => employee.status === 'Desativado');
  }

  getActivatedEmployees(): Employee[] {
    return this.employees.filter(employee => employee.status === 'Ativado');
  }

  setEmployeeId(id: string) {
    this.selectedEmployeeId = id;
  }
}