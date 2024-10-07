import { Component } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';

@Component({
  selector: 'app-modal-delete-employee',
  standalone: true,
  imports: [
    ReusableModalComponent
  ],
  templateUrl: './modal-delete-employee.component.html',
  styleUrl: './modal-delete-employee.component.css'
})
export class ModalDeleteEmployeeComponent {

  deleteEmployee() {}
}
