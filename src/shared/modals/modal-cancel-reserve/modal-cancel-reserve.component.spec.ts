import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelReserveComponent } from './modal-cancel-reserve.component';

describe('ModalCancelReserveComponent', () => {
  let component: ModalCancelReserveComponent;
  let fixture: ComponentFixture<ModalCancelReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCancelReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCancelReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
