import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewProfileComponent } from './crew-profile.component';

describe('CrewProfileComponent', () => {
  let component: CrewProfileComponent;
  let fixture: ComponentFixture<CrewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
