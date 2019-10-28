import { Injectable } from '@angular/core';
import { Urlable, Stat, Slotable } from '../interfaces';

@Injectable()
export class SortService {

    /**
     * Sort function for an array of objects with a 'slot' property
     * @param a Object 1
     * @param b Object 2
     */
    sortBySlot(a: Slotable, b: Slotable): number {
        if (a.slot < b.slot) {
            return -1;
        } else if (a.slot > b.slot) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Sort function for an array of Stat objects. Always orders elements in predetermined order.
     * @param a Stat object 1
     * @param b Stat object 2
     */
    sortStats(a: Stat, b: Stat): number {
        const order: Array<string> = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL-ATTACK', 'SPECIAL-DEFENSE', 'SPEED'];
        const aStatName: string = a.stat.name.toUpperCase();
        const bStatName: string = b.stat.name.toUpperCase();
        const aIndex: number = order.indexOf(aStatName);
        const bIndex: number = order.indexOf(bStatName);

        if (aIndex < bIndex) {
            return -1;
        } else if (aIndex > bIndex) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Extracts the number portion of a url, assuming the ID is at the end of the url string.
     * @param url Url to extract ID from; supports both trailing '/' and non-tailing '/'
     */
    getIDFromUrl(url: Urlable): number {
        const trimmed: string = url.url.endsWith('/') ? url.url.slice(0, -1) : url.url;
        return +trimmed.substring(trimmed.lastIndexOf('/') + 1);
    }

    /**
     * Sorts objects based on ID from a url property in descending order
     * @param obj1 Object 1
     * @param obj2 Object 2
     */
    sortByID(obj1: Urlable, obj2: Urlable) {
        const aID: number = this.getIDFromUrl(obj1);
        const bID: number = this.getIDFromUrl(obj2);
        if (aID < bID) {
            return -1;
        } else if (aID > bID) {
            return 1;
        } else {
            return 0;
        }
    }

}