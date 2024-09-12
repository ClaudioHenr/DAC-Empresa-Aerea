import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';

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
    }
];
