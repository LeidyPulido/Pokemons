import { TestBed, async } from '@angular/core/testing';
import { PokemonsComponent } from './pokemons.component';

describe('PokemonsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*
  it(`should have as title 'Pokemons'`, () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pokemons');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Pokemons app is running!');
  })); */
});