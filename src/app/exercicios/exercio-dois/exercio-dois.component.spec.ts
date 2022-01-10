import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercioDoisComponent } from './exercio-dois.component';

describe('ExercioDoisComponent', () => {
  let component: ExercioDoisComponent;
  let fixture: ComponentFixture<ExercioDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercioDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercioDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
