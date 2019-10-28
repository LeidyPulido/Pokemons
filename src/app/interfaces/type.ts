import { Nameable, Urlable, Slotable } from './contracts';

export interface Type extends Slotable {
    type: TypeRef;
}
export interface TypeRef extends Nameable, Urlable {}