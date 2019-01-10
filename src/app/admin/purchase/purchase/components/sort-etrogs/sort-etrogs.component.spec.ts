import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortEtrogsComponent } from './sort-etrogs.component';

describe('SortEtrogsComponent', () => {
  let component: SortEtrogsComponent;
  let fixture: ComponentFixture<SortEtrogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortEtrogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortEtrogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
