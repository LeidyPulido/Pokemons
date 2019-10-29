import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Stat, Ability, Pokemon, Sprites, Form, TypeRef, Type } from '../../interfaces';
import { ServiceComponent, ColorService, SortService } from '../../service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
import { map, switchMap, share } from 'rxjs/operators';

@Component({
    selector: 'app-species-cards',
    templateUrl: './species-cards.component.html',
    styleUrls: ['./species-cards.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesCardComponent implements OnInit {
    speciesData$: Observable<Pokemon>;

    // sprites
    front_sprite$: Observable<string>;
    back_sprite$: Observable<string>;
    front_shiny_sprite$: Observable<string>;
    back_shiny_sprite$: Observable<string>;
    back_female_sprite$: Observable<string>;
    back_shiny_female_sprite$: Observable<string>;
    front_female_sprite$: Observable<string>;
    front_shiny_female_sprite$: Observable<string>;

    name$: Observable<string>;
    types$: Observable<Array<TypeRef>>;
    abilities$: Observable<Array<Ability>>;
    stats$: Observable<Array<Stat>>;

    constructor(
        private _api: ServiceComponent,
        private _router: Router,
        private _actRoute: ActivatedRoute,
        private _sort: SortService
    ) { }

    ngOnInit() {
        this.speciesData$ = this._actRoute.paramMap.pipe(
            switchMap((params: ParamMap) => this._api.getPokemonByNumber(+params.get('id'))),
            share()
        );

        const form$: Observable<Form> = this.speciesData$.pipe(
            switchMap((pokemon: Pokemon) => this._api.getPokemonForm(pokemon)),
            share()
        );

        this.front_sprite$ = form$.pipe(map((form: Form) => form.sprites.front_default));
        this.back_sprite$ = form$.pipe(map((form: Form) => form.sprites.back_default));
        this.front_shiny_sprite$ = form$.pipe(map((form: Form) => form.sprites.front_shiny));
        this.back_shiny_sprite$ = form$.pipe(map((form: Form) => form.sprites.back_shiny));
        this.back_female_sprite$ = form$.pipe(map((form: Form) => form.sprites.back_female));
        this.back_shiny_female_sprite$ = form$.pipe(map((form: Form) => form.sprites.back_shiny_female));
        this.front_female_sprite$ = form$.pipe(map((form: Form) => form.sprites.front_female));
        this.front_shiny_female_sprite$ = form$.pipe(map((form: Form) => form.sprites.front_shiny_female));

        this.name$ = this.speciesData$.pipe(map((poke: Pokemon) => poke.name));
        this.types$ = this.speciesData$.pipe(
            map((poke: Pokemon) => poke.types.sort((a: Type, b: Type) =>
                this._sort.sortBySlot(a, b)).map(type => type.type))
        );
        this.abilities$ = this.speciesData$.pipe(map((poke: Pokemon) =>
            poke.abilities.sort((a: Ability, b: Ability) => this._sort.sortBySlot(a, b))));
        this.stats$ = this.speciesData$.pipe(map((poke: Pokemon) =>
            poke.stats.sort((a: Stat, b: Stat) => this._sort.sortStats(a, b))));
    }
}