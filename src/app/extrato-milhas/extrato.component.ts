import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { authentication } from '../../../shared/models/authentication.model';
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
 
  auth: authentication = new authentication()

  public errorMessage = ''
}
