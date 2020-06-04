import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDropdownComponent } from './story-dropdown.component';

describe('StoryDropdownComponent', () => {
  let component: StoryDropdownComponent;
  let fixture: ComponentFixture<StoryDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
