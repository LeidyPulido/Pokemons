import { Description } from './description';
import { Name } from './name';
import { PokemonEntry } from './pokemon';
import { RegionRef } from './region';
import { VersionGroupRef } from './version';
import { Nameable, IDable } from './contracts';


export interface Pokedex extends Nameable, IDable {
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: RegionRef;
    version_groups: VersionGroupRef[];
}