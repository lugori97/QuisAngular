import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatarjetaComponent } from './vistatarjeta.component';

describe('VistatarjetaComponent', () => {
  let component: VistatarjetaComponent;
  let fixture: ComponentFixture<VistatarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistatarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistatarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
