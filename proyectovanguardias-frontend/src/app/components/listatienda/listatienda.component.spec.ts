import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatiendaComponent } from './listatienda.component';

describe('ListatiendaComponent', () => {
  let component: ListatiendaComponent;
  let fixture: ComponentFixture<ListatiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
