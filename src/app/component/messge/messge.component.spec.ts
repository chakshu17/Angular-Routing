import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgeComponent } from './messge.component';

describe('MessgeComponent', () => {
  let component: MessgeComponent;
  let fixture: ComponentFixture<MessgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
