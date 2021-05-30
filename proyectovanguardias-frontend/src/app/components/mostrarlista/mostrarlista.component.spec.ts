import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarlistaComponent } from './mostrarlista.component';

describe('MostrarlistaComponent', () => {
  let component: MostrarlistaComponent;
  let fixture: ComponentFixture<MostrarlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
