import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckInComponent } from './modal-check-in.component';

describe('ModalCheckInComponent', () => {
  let component: ModalCheckInComponent;
  let fixture: ComponentFixture<ModalCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
