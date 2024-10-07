import { Component } from '@angular/core';
import { ReusableModalComponent } from '../../../../../shared/modals/base/reusable-modal/reusable-modal.component';

@Component({
  selector: 'app-boarding-modal',
  standalone: true,
  imports: [
    ReusableModalComponent
  ],
  templateUrl: './boarding-modal.component.html',
  styleUrls: ['./boarding-modal.component.css']
})
export class BoardingModalComponent {

  confirmBoarding() {

    console.log('Embarque confirmado');
  }
}