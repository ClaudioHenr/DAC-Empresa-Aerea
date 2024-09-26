import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyMilesComponent } from './modal-buy-miles.component';

describe('ModalBuyMilesComponent', () => {
  let component: ModalBuyMilesComponent;
  let fixture: ComponentFixture<ModalBuyMilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBuyMilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBuyMilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
