import { Sprites } from './sprites';
import { VersionGroupRef } from './version';
import { PokemonRef } from './pokemon';
import { Nameable, Urlable, IDable } from './contracts';

export interface FormRef extends Nameable, Urlable {}

export interface Form extends Nameable, IDable {
    is_battle_only: boolean;
    sprites: Sprites;
    version_group: VersionGroupRef,
    form_order: number;
    is_mega: false;
    form_names: Array<string>;
    is_default: boolean;
    names: Array<string>;
    form_name: string;
    pokemon: PokemonRef;
    order: number;
}