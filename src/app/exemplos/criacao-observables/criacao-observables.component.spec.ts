import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoObservablesComponent } from './criacao-observables.component';

describe('CriacaoObservablesComponent', () => {
  let component: CriacaoObservablesComponent;
  let fixture: ComponentFixture<CriacaoObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
