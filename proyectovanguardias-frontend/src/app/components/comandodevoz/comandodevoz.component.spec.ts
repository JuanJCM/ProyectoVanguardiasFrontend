import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandodevozComponent } from './comandodevoz.component';

describe('ComandodevozComponent', () => {
  let component: ComandodevozComponent;
  let fixture: ComponentFixture<ComandodevozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandodevozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandodevozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
