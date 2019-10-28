import { VersionGroupRef } from './version';
import { Name } from './name';
import { PokemonRef } from './pokemon';
import { MoveRef } from './move';
import { TypeRef } from './type';
import { AbilityRef } from './ability';
import { RegionRef } from './region';
import { Nameable, Urlable, IDable } from './contracts';

export interface Generations {
    count: number;
    previous: any;
    results: Array<GenerationRef>;
    next: any;
}
export interface GenerationRef extends Nameable, Urlable, IDable {}
export interface GenerationDetail extends Nameable {
    abilities: Array<AbilityRef>;
    version_groups: Array<VersionGroupRef>;
    names: Array<Name>;
    pokemon_species: Array<PokemonRef>;
    moves: Array<MoveRef>;
    main_region: RegionRef;
    types: Array<TypeRef>;
}