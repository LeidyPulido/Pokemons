import { MoveLearnMethod } from './move';
import { Nameable, Urlable } from './contracts';

export interface VersionRef extends Nameable, Urlable {}

export interface VersionGroupRef extends Nameable, Urlable {}

export interface VersionGroupDetail {
    move_learn_method: MoveLearnMethod;
    level_learned_at: number;
    version_group: VersionGroupRef;
}