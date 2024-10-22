import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Authentication} from '../../../shared/models/Authentication.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  //public roleUser: number | undefined;
  public roleUser:number = 2;

  //constructor(private auth: Authentication) {}

  ngOnInit(): void {
    //this.roleUser = this.auth.role;
  }

}