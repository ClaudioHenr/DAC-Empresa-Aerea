import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layout/navbar/navbar.component";
import { Flight } from '../../../../shared/models/Flight.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
    CommonModule
  ],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

}
