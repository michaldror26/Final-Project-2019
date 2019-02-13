import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresseeBarComponent } from './addressee-bar.component';

describe('AddresseeBarComponent', () => {
  let component: AddresseeBarComponent;
  let fixture: ComponentFixture<AddresseeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresseeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresseeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
