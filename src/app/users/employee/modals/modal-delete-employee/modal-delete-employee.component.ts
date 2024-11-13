import { Component, Input } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';
import axios from 'axios';

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
  @Input() employeeId?: string;

  async deleteEmployee() {
    try {
      const response = await axios.delete(`http://localhost:3000/employees/${this.employeeId}`);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Erro ao remover funcionário:', error);
      alert('Erro ao remover funcionário');
    }
  }
}