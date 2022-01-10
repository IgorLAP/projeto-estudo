import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioUmComponent } from './exercicio-um.component';

describe('ExercicioUmComponent', () => {
  let component: ExercicioUmComponent;
  let fixture: ComponentFixture<ExercicioUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
