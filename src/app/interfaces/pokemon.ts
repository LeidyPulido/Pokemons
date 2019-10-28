import { FormRef } from './form';
import { Ability } from './ability';
import { Stat } from './stat';
import { Move } from './move';
import { Sprites } from './sprites';
import { GameIndice } from './gameIndice';
import { SpeciesRef } from './species';
import { Type } from './type';
import { Nameable, Urlable, IDable } from './contracts';

export interface Pokemon extends Nameable, IDable {
    forms: FormRef[];
    abilities: Ability[];
    stats: Stat[];
    weight: number;
    moves: Move[];
    sprites: Sprites;
    held_items: any[];
    location_area_encounters: string;
    height: number;
    is_default: boolean;
    species: SpeciesRef;
    order: number;
    game_indices: GameIndice[];
    base_experience: number;
    types: Type[];
}

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonRef;
}

export interface PokemonRef extends Nameable, Urlable {}