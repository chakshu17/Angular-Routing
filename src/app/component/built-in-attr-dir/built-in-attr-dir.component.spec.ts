import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInAttrDirComponent } from './built-in-attr-dir.component';

describe('BuiltInAttrDirComponent', () => {
  let component: BuiltInAttrDirComponent;
  let fixture: ComponentFixture<BuiltInAttrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInAttrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInAttrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
