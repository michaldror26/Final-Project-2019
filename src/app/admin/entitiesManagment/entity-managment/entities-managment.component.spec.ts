import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesManagmentComponent } from './entities-managment.component';

describe('EntitiesManagmentComponent', () => {
  let component: EntitiesManagmentComponent;
  let fixture: ComponentFixture<EntitiesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
