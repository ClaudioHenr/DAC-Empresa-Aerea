import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet, 
    NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Verificar as rotas atuais para esconder a Navbar
      const excludedRoutes = ['/login', '/register'];
      this.showNavbar = !excludedRoutes.includes(this.router.url);
    });
  }
}
