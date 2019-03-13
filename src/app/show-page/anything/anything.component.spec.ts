import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnythingComponent } from './anything.component';

describe('AnythingComponent', () => {
  let component: AnythingComponent;
  let fixture: ComponentFixture<AnythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
