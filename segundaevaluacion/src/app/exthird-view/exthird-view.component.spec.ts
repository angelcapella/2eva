import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExthirdViewComponent } from './exthird-view.component';

describe('ExthirdViewComponent', () => {
  let component: ExthirdViewComponent;
  let fixture: ComponentFixture<ExthirdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExthirdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExthirdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
