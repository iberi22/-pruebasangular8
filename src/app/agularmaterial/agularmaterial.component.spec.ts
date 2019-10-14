import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgularmaterialComponent } from './agularmaterial.component';

describe('AgularmaterialComponent', () => {
  let component: AgularmaterialComponent;
  let fixture: ComponentFixture<AgularmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgularmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgularmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
