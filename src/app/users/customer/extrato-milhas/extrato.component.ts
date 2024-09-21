import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Authentication } from '../../../../shared/models/Authentication.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-extrato-milhas',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
 
  auth: Authentication = new Authentication()

  public errorMessage = ''
}
