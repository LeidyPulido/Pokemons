import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

    getColorByName(colorName: string): string {
        let color = '';

        switch (colorName.toUpperCase()) {
            case 'NORMAL':
                color = '#A8A77A';
                break;
            case 'FIRE':
                color = '#EE8130';
                break;
            case 'WATER':
                color = '#6390F0';
                break;
            case 'ELECTRIC':
                color = '#F7D02C';
                break;
            case 'GRASS':
                color = '#7AC74C';
                break;
            case 'ICE':
                color = '#96D9D6';
                break;
            case 'FIGHTING':
                color = '#C22E28';
                break;
            case 'POISON':
                color = '#A33EA1';
                break;
            case 'GROUND':
                color = '#E2BF65';
                break;
            case 'FLYING':
                color = '#A98FF3';
                break;
            case 'PSYCHIC':
                color = '#F95587';
                break;
            case 'BUG':
                color = '#A6B91A';
                break;
            case 'ROCK':
                color = '#B6A136';
                break;
            case 'GHOST':
                color = '#735797';
                break;
            case 'DRAGON':
                color = '#6F35FC';
                break;
            case 'DARK':
                color = '#705746';
                break;
            case 'STEEL':
                color = '#B7B7CE';
                break;
            case 'FAIRY':
                color = '#D685AD';
                break;
            case 'RED':
                color = '#FF1111';
                break;
            case 'BLUE':
                color = '#1111FF';
                break;
            case 'YELLOW':
                color = '#FFD733';
                break;
            case 'GOLD':
                color = '#DAA520';
                break;
            case 'SILVER':
                color = '#C0C0C0';
                break;
            case 'CRYSTAL':
                color = '#4FD9FF';
                break;
            case 'RUBY':
                color = '#A00000';
                break;
            case 'SAPPHIRE':
                color = '#0000A0';
                break;
            case 'EMERALD':
                color = '#00A000';
                break;
            case 'FIRERED':
                color = '#FF7327';
                break;
            case 'LEAFGREEN':
                color = '#00DD00';
                break;
            case 'DIAMOND':
                color = '#AAAAFF';
                break;
            case 'PEARL':
                color = '#FFAAAA';
                break;
            case 'PLATINUM':
                color = '#999999';
                break;
            case 'HEARTGOLD':
                color = '#B69E00';
                break;
            case 'SOULSILVER':
                color = '#C0C0E1';
                break;
            case 'BLACK':
            case 'BLACK-2':
                color = '#444444';
                break;
            case 'WHITE':
            case 'WHITE-2':
                color = '#E1E1E1';
                break;
            case 'X':
                color = '#6376B8';
                break;
            case 'Y':
                color = '#ED5540';
                break;
            case 'OMEGARUBY':
                color = '#CF3025';
                break;
            case 'ALPHASAPPHIRE':
                color = '#1768D1';
                break;
            case 'SUN':
                color = '#F1912B';
                break;
            case 'MOON':
                color = '#5599CA';
                break;
        }

        return color;
        }
    }