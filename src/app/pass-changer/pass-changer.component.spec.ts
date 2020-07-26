import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassChangerComponent } from './pass-changer.component';

describe('PassChangerComponent', () => {
  let component: PassChangerComponent;
  let fixture: ComponentFixture<PassChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
