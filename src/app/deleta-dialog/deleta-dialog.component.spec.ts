import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaDialogComponent } from './deleta-dialog.component';

describe('DeletaDialogComponent', () => {
  let component: DeletaDialogComponent;
  let fixture: ComponentFixture<DeletaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
