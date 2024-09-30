import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-modal',
  standalone: true,
  imports: [],
  templateUrl: './reusable-modal.component.html',
  styleUrl: './reusable-modal.component.css'
})
export class ReusableModalComponent {
  @Input() modalId?: string
  @Input() title?: string
}
