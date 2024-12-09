import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Exemplo de serviço de autenticação

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login, por exemplo
      return false;
    }
  }
}
