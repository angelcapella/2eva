import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExbuttonComponent } from './exbutton.component';

describe('ExbuttonComponent', () => {
  let component: ExbuttonComponent;
  let fixture: ComponentFixture<ExbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
