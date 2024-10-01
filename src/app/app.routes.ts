import { Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { TesteComponent } from './teste/teste.component';
import { ViewBookingComponent } from './users/customer/view-booking/view-booking.component';
import { HomeScreenComponent } from './users/customer/home-screen/home-screen.component';
import { HomeEmployeeComponent } from './users/employee/home-employee/home-employee.component';
import { ExtratoComponent } from './users/customer/extrato-milhas/extrato.component';
import { FirstPageBookingComponent } from './users/customer/booking/first-page-booking/first-page-booking.component';
import { SecondPageBookingComponent } from './users/customer/booking/second-page-booking/second-page-booking.component';
import { LastPageBookingComponent } from './users/customer/booking/last-page-booking/last-page-booking.component';


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
    },
    {
        path: 'home',
        component: HomeScreenComponent
    },
    {
        path: 'eh',
        component: HomeEmployeeComponent
    },
    {
        path: 'extrato',
        component: ExtratoComponent
    },
    {
        path: 'booking/first-page',
        component: FirstPageBookingComponent
    },
    {
        path: 'booking/second-page',
        component: SecondPageBookingComponent
    },
    {
        path: 'booking/last-page',
        component: LastPageBookingComponent
    }
];
