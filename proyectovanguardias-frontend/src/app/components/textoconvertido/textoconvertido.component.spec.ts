import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoconvertidoComponent } from './textoconvertido.component';

describe('TextoconvertidoComponent', () => {
  let component: TextoconvertidoComponent;
  let fixture: ComponentFixture<TextoconvertidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoconvertidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoconvertidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
