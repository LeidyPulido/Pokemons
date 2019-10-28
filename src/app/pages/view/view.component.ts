import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceComponent, SortService } from '../../service';
import { GenerationDetail, PokemonRef, MoveRef, AbilityRef,
    RegionRef, VersionGroupRef, Urlable } from '../../interfaces';
import { Observable } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
    @Input() genID: number;

    genDetail$: Observable<GenerationDetail>;
    genName$: Observable<string>;
    pokemonSpecies$: Observable<Array<PokemonRef>>;
    moves$: Observable<Array<MoveRef>>;
    abilities$: Observable<Array<AbilityRef>>;
    region$: Observable<RegionRef>;
    versions$: Observable<Array<VersionGroupRef>>;

    constructor(
        private _api: ServiceComponent,
        private _router: Router,
        private _actRoute: ActivatedRoute,
        private _sort: SortService
    ) { }

    ngOnInit() {
        // get route params
        this.genDetail$ = this._actRoute.paramMap.pipe(
            switchMap((params: ParamMap) => this._api.getGenerationDetailByNumber(+params.get('id'))),
            // we share the observable so that the other observables dont cause their own network requests
            share()
        );

        this.genName$ = this.genDetail$.pipe(map((genDeets: GenerationDetail) => genDeets.name));

        this.pokemonSpecies$ = this.genDetail$.pipe(
            map((genDeets: GenerationDetail) =>
                genDeets.pokemon_species.sort((a: PokemonRef, b: PokemonRef) => this._sort.sortByID(a, b)))
        );

        this.moves$ = this.genDetail$.pipe(
            map((genDeets: GenerationDetail) =>
                genDeets.moves.sort((a: MoveRef, b: MoveRef) => this._sort.sortByID(a, b)))
        );

        // generations 1 and 2 will return an empty array for the abilities property
        this.abilities$ = this.genDetail$.pipe(
            map((genDeets: GenerationDetail) =>
                genDeets.abilities.sort((a: AbilityRef, b: AbilityRef) => this._sort.sortByID(a, b)))
        );

        this.region$ = this.genDetail$.pipe(
            map((genDeets: GenerationDetail) => genDeets.main_region)
        );

        this.versions$ = this.genDetail$.pipe(
            map((genDeets: GenerationDetail) => genDeets.version_groups)
        );
    }

    goToSpecies(pokeSpecies: PokemonRef) {
        this._router.navigate(['/species', this._sort.getIDFromUrl(pokeSpecies)]);
    }

    goToMove(move: MoveRef) {
        this._router.navigate(['/move', this._sort.getIDFromUrl(move)]);
    }

    trackByFn(index: number, item: Urlable) {
        return item.url;
    }
}
