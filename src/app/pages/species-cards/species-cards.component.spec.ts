import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesCardsComponent } from './species-cards.component';

describe('SpeciesCardsComponent', () => {
  let component: SpeciesCardsComponent;
  let fixture: ComponentFixture<SpeciesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
