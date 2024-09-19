import { Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { TesteComponent } from './teste/teste.component';
import { HomeEmployeeComponent } from './users/employee/home-employee/home-employee.component';

export const routes: Routes = [
    {
        path: 'reg',
        component: RegisterComponent
    },
    {
        path: 'l',
        component: LoginComponent
    },
    {
        path: 't',
        component: TesteComponent
    },
    {
        path: 'eh',
        component: HomeEmployeeComponent
    }
];
