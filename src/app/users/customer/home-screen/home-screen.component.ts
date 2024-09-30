import { Component } from '@angular/core';
import { ModalBuyMilesComponent } from "../../../../shared/modals/modal-buy-miles/modal-buy-miles.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ModalBuyMilesComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}