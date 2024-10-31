import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Serviço de autenticação que verifica o papel do usuário

@Injectable({
  providedIn: 'root'
})
export class FuncionarioGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isFuncionario = this.authService.hasRole('funcionario'); // Exemplo de verificação de papel

    if (isFuncionario) {
      return true;
    } else {
      this.router.navigate(['/acesso-negado']); // Redireciona se o usuário não for funcionário
      return false;
    }
  }
}
