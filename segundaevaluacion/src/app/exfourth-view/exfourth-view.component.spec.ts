import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExfourthViewComponent } from './exfourth-view.component';

describe('ExfourthViewComponent', () => {
  let component: ExfourthViewComponent;
  let fixture: ComponentFixture<ExfourthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExfourthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExfourthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
