import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitesDetailComponent } from './cites-detail.component';

describe('CitesDetailComponent', () => {
  let component: CitesDetailComponent;
  let fixture: ComponentFixture<CitesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
