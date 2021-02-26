import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitesItemComponent } from './cites-item.component';

describe('CitesItemComponent', () => {
  let component: CitesItemComponent;
  let fixture: ComponentFixture<CitesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
