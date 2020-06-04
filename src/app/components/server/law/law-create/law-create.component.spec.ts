import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawCreateComponent } from './law-create.component';

describe('LawCreateComponent', () => {
  let component: LawCreateComponent;
  let fixture: ComponentFixture<LawCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
