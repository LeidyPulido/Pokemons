import { VersionGroupDetail, VersionGroupRef } from './version';
import { GenerationRef } from './generations';
import { TypeRef } from './type';
import { LanguageRef } from './language';
import { Name } from './name';
import { Nameable, Urlable, IDable } from './contracts';

export interface Move {
    version_group_details: VersionGroupDetail[];
    move: MoveRef;
}
export interface MoveRef extends Nameable, Urlable {}
export interface MoveLearnMethod extends Nameable, Urlable {}
export interface MoveDetail extends Nameable, IDable {
    effect_chance?: any;
    generation: GenerationRef;
    stat_changes: any[];
    effect_changes: any[];
    names: Name[];
    machines: any[];
    pp: number;
    contest_combos: ContestCombos;
    effect_entries: EffectEntry[];
    contest_type: ContestTypeRef;
    priority: number;
    contest_effect: ContestEffect;
    type: TypeRef;
    accuracy: number;
    power: number;
    past_values: any[];
    target: Target;
    super_contest_effect: SuperContestEffect;
    flavor_text_entries: FlavorTextEntry[];
    damage_class: DamageClassRef;
    meta: Meta;
}
export interface Super {
    use_after: UseAfter;
    use_before: UseBefore;
}
export interface UseBefore extends Urlable, Nameable {}
export interface UseAfter extends Urlable, Nameable {}
export interface Normal {
    use_after: UseAfter;
    use_before: UseBefore[];
}
export interface ContestCombos {
    super: Super;
    normal: Normal;
}
export interface EffectEntry {
    short_effect: string;
    effect: string;
    language: LanguageRef;
}
export interface ContestTypeRef extends Urlable, Nameable {}
export interface ContestEffect extends Urlable {}
export interface Target extends Urlable, Nameable {}
export interface SuperContestEffect extends Urlable {}
export interface FlavorTextEntry {
    flavor_text: string;
    language: LanguageRef;
    version_group: VersionGroupRef;
}
export interface DamageClassRef extends Urlable, Nameable {}
export interface Category extends Urlable, Nameable {}
export interface Ailment extends Urlable, Nameable {}
export interface Meta {
    category: Category;
    healing: number;
    max_turns?: any;
    drain: number;
    ailment: Ailment;
    stat_chance: number;
    flinch_chance: number;
    min_hits?: any;
    ailment_chance: number;
    crit_rate: number;
    min_turns?: any;
    max_hits?: any;
}