import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { map } from 'rxjs/operators';
import { PokedexEnum } from '../enums/pokedex.enum';
import { Pokemon, Pokedex, PokemonRef, Form, Sprites,
    Generations, GenerationDetail, MoveDetail } from '../interfaces';

@Injectable()
export class ServiceComponent {
    useMockData = true;

    rootApiUrl = 'https://pokeapi.co/api/v2/';
    pokemonMap: Map<number, Pokemon> = new Map<number, Pokemon>();
    pokedexMap: Map<PokedexEnum, Pokedex> = new Map<PokedexEnum, Pokedex>();
    speciesMap: Map<number, PokemonRef> = new Map<number, PokemonRef>();
    generationMap: Map<number, GenerationDetail> = new Map<number, GenerationDetail>();
    formMap: Map<number, Form> = new Map<number, Form>();
    moveMap: Map<number, MoveDetail> = new Map<number, MoveDetail>();

    constructor(
        private _http: HttpClient
    ) { }

    /**
     * Gets a single pokemon by number
     */
    public getPokemonByNumber(pokeNum: number): Observable<Pokemon> {
        if (this.pokemonMap.get(pokeNum)) {
            return new Observable(observer => observer.next(this.pokemonMap.get(pokeNum)));
        } else {
            const obs$ = this._http.get<Pokemon>(this.rootApiUrl + 'pokemon/' + pokeNum + '/').pipe(
                map(res => <Pokemon>res.valueOf())
            );
            obs$.subscribe(resp => this.pokemonMap.set(pokeNum, resp));
            return obs$;
        }
    }

    /**
     * Gets the pokedex of a specified region type
     */
    public getPokedex(dexEnum: PokedexEnum): Observable<Pokedex> {
        if (this.pokedexMap.get(dexEnum)) {
            return new Observable(observer => observer.next(this.pokedexMap.get(dexEnum)));
        } else {
            const requestUrl: string = this.rootApiUrl + 'pokedex/' + dexEnum;
            const obs$ = this._http.get<Pokedex>(requestUrl).pipe(
                map(res => <Pokedex>res.valueOf())
            );
            obs$.subscribe(resp => this.pokedexMap.set(dexEnum, resp));
            return obs$;
        }
    }

    /**
     * Gets a pokemon species by species ID. Uses the same cache as getPokemonSpeciesByUrl().
     */
    public getPokemonSpeciesByNumber(speciesNum: number): Observable<PokemonRef> {
        if (this.speciesMap.get(speciesNum)) {
            return new Observable(observer => observer.next(this.speciesMap.get(speciesNum)));
        } else {
            const requestUrl: string = this.rootApiUrl + 'pokemon-species/' + speciesNum;
            const obs$ = this._http.get<PokemonRef>(requestUrl).pipe(
                map(res => <PokemonRef>res.valueOf())
            );
            obs$.subscribe(resp => this.speciesMap.set(speciesNum, resp));
            return obs$;
        }
    }

    /**
     * Gets a pokemon species by an API-returned url. Uses the same cache as getPokemonSpeciesByNumber().
     */
    public getPokemonSpeciesByUrl(url: string): Observable<PokemonRef> {
        if (url.endsWith('/')) {
            url = url.substr(0, url.length - 1);
        }

        const speciesNum: string = url.substring(url.lastIndexOf('/') + 1);
        return this.getPokemonSpeciesByNumber(Number.parseInt(speciesNum));
    }

    /**
     * Gets a list and count of the current generations
     */
    public getAllGenerations(): Observable<Generations> {
        if (this.useMockData) {
            return this._http.get<Generations>('assets/allGenerations.json').pipe(
                map(res => <Generations>res)
            );
        }

        // the trailing '/' prevents an HTTP error for some CORS reason
        const requestUrl: string = this.rootApiUrl + 'generation/';
        return this._http.get<Generations>(requestUrl).pipe(
            map(res => <Generations>res.valueOf())
        );
    }

    /**
     * Gets the generation data by generation ID
     * @param genNum ID of the generation to get
     */
    public getGenerationDetailByNumber(genNum: number): Observable<GenerationDetail> {
        if (this.useMockData) {
            return this._http.get<GenerationDetail>(`assets/generation-${genNum}.json`).pipe(
                map(res => <GenerationDetail>res)
            );
        }

        if (this.generationMap.get(genNum)) {
            return new Observable(observer => observer.next(this.generationMap.get(genNum)));
        } else {
            const requestUrl: string = this.rootApiUrl + 'generation/' + genNum + '/';
            const obs$ = this._http.get<GenerationDetail>(requestUrl).pipe(
                map(res => <GenerationDetail>res.valueOf())
            );
            obs$.subscribe(resp => this.generationMap.set(genNum, resp));
            return obs$;
        }
    }

    public getMoveDetailByNumber(moveID: number): Observable<MoveDetail> {
        if (this.useMockData) {
            return this._http.get<MoveDetail>(`assets/move-${moveID}.json`).pipe(
                map(res => <MoveDetail>res)
            );
        }

        if (this.moveMap.get(moveID)) {
            return of(this.moveMap.get(moveID));
        } else {
            const requestUrl = `${this.rootApiUrl}move/${moveID}/`;
            const obs$ = this._http.get<MoveDetail>(requestUrl).pipe(
                map(res => <MoveDetail>res.valueOf())
            );
            obs$.subscribe(resp => this.moveMap.set(moveID, resp));
            return obs$;
        }
    }

    /**
    * Gets the sprite data for a given pokemon
    * @param pokemon Pokemon
    */
    public getPokemonForm(pokemon: Pokemon): Observable<Form> {
        if (this.formMap.get(pokemon.id)) {
            return new Observable(observer => observer.next(this.formMap.get(pokemon.id)));
        } else {
            // when is the forms array ever more than 1?
            const requestUrl: string = pokemon.forms[0].url;
            const obs$ = this._http.get<Form>(requestUrl).pipe(
                map(res => <Form>res.valueOf())
            );
            obs$.subscribe(resp => this.formMap.set(pokemon.id, resp));
            return obs$;
        }
    }
}