import { Component } from '@angular/core';

@Component({
  selector: 'app-boarding-modal',
  templateUrl: './boarding-modal.component.html',
  styleUrls: ['./boarding-modal.component.css']
})
export class BoardingModalComponent {

  closeModal() {

    console.log('Modal fechada');
  }

  confirmBoarding() {

    console.log('Embarque confirmado');
  }
}