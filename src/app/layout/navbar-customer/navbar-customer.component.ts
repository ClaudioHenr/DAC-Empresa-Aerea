import { Component, Inject } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class NavbarCustomerComponent {

  constructor(@Inject(StorageService) private storageService: StorageService, private router: Router) { }

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/login']);
  }
}