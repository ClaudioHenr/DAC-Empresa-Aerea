import { Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { TesteComponent } from './teste/teste.component';
import { ViewBookingComponent } from './client/view-booking/view-booking.component';

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
        path: 'view-booking',
        component: ViewBookingComponent
    }

];
