import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSorteioComponent } from './app-sorteio.component';

describe('AppSorteioComponent', () => {
  let component: AppSorteioComponent;
  let fixture: ComponentFixture<AppSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSorteioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
