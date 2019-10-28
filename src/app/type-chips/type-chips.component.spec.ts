import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChipsComponent } from './type-chips.component';

describe('TypeChipsComponent', () => {
  let component: TypeChipsComponent;
  let fixture: ComponentFixture<TypeChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
