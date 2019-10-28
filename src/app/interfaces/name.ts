import { LanguageRef } from './language';
import { Nameable } from './contracts';

export interface Name extends Nameable {
    language: LanguageRef;
}