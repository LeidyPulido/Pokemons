import { Nameable, Urlable, Slotable } from './contracts';

export interface Ability extends Slotable {
    is_hidden: boolean;
    ability: AbilityRef;
}

export interface AbilityRef extends Nameable, Urlable {}