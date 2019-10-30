import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Generations, GenerationRef } from '../../interfaces';
import { ServiceComponent } from '../../service/service.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  generations$: Observable<Array<GenerationRef>>;

  constructor(private _api: ServiceComponent) { }

  ngOnInit() {
      this.generations$ = this._api.getAllGenerations().pipe(
          map((gens: Generations) => gens.results)
      );
  }
}