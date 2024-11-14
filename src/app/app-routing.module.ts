
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  // Importa o Auth Guard
import { LoginComponent } from './components/login/login.component';  // Supondo que você tenha uma página de login
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Página principal protegida
import { VoosComponent } from './components/voos/voos.component';  // Página de voos protegida

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Página de login pública
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  // Protege a rota do dashboard
  { path: 'voos', component: VoosComponent, canActivate: [AuthGuard] },  // Protege a rota de voos
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redireciona para login se a rota estiver vazia
  { path: '**', redirectTo: '/login' }  // Redireciona para login se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
