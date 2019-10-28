import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCardsComponent } from './move-cards.component';

describe('MoveCardsComponent', () => {
  let component: MoveCardsComponent;
  let fixture: ComponentFixture<MoveCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
