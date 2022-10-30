import {
        forward,
        left,
        right,
        CallF1,
        CallF2,
} from "./functions.js";

export function puzzleSolution(type) {
    switch (type) {
    case "star":
        return {
            F1 : [[forward,' '], [right, 'b'], [CallF2, 'b']],
            F2 : [[forward,' '], [right, 'r'], [CallF1, ' ']],
        };

    case "0":
        return {
            F1 : [[forward,' '], [right, 'b'], [right, 'g'] , [CallF1, ' '] ],
        };
    case "mountains":
        return  {
            F1 : [[forward,'b'], [CallF1, 'b'], [right, 'r'], [forward,' '],  [CallF2,' ']],
            F2 : [[forward,'g'], [CallF2, 'g'], [left, 'r'], [forward,' '],  [CallF1, ' ']]
        };
    case "windmill":
        return {
            F1 : [[forward, ' '], [forward, 'b'], [right, 'b'], [forward, 'b'], [left, 'b'], [forward, 'b'], [CallF2, 'b']],
            F2: [[forward, 'b'], [left, 'b'], [left, 'b'], [CallF1, 'b'], [left, 'r'], [CallF1, 'r']]};
    default:
	return {F1 : [[forward,' '], [right, 'b'], [right, 'g'] , [CallF1, ' ']]
        }; 
    }
}
