import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoPipesComponent } from './criacao-pipes.component';

describe('CriacaoPipesComponent', () => {
  let component: CriacaoPipesComponent;
  let fixture: ComponentFixture<CriacaoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
