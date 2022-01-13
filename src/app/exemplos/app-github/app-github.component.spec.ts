import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGithubComponent } from './app-github.component';

describe('AppGithubComponent', () => {
  let component: AppGithubComponent;
  let fixture: ComponentFixture<AppGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
