import { Nameable, Urlable } from './contracts';

export interface Stat {
    stat: StatRef;
    effort: number;
    base_stat: number;
}
export interface StatRef extends Nameable, Urlable {}