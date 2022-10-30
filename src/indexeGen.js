import {
    forward,
    left,
    right,
    ApplyFunction,
    ApplyFunctionFictif,
    ExecuteOneByOne,
    addRobot,
    CallF1,
    fillBoard,
    CallF2,
    CallF3,
    CallF4,
} from "./functions.js";
import {nil } from "./stack.js";
import {getSolution} from "./solutions.js";

    // 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
    // 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
    // 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
    // 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
    // D = droplet, E = rocket, F = empty

let program2 = {
    F1 : [[forward,' '], [right, 'b'], [CallF2, 'b']],
    F2 : [[forward,' '], [left, 'r'], [CallF1, ' ']],
};

let puzzle = {
    id:1,
    title:"star",
    about:"",
    robot : {col : 8, row : 5, dir : 0},
    subs:[3,3,0,0,0],
    allowedCommands:0,
    score: 1,
    board:[ '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ' ]
};

let puzzle2 = {
    id:1,
    title:"star",
    about:"",
    robot : {col : 8, row : 5, dir : 0},
    subs:[3,3,0,0,0],
    allowedCommands:0,
    score: 1,
    board:[ '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ' ]
};
let puzzle3 = {
    id:1,
    title:"star",
    about:"",
    robot : {col : 8, row : 5, dir : 0},
    subs:[3,3,0,0,0],
    allowedCommands:0,
    score: 1,
    board:[ '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ',
            '                ' ]
};
// removing this comment section gives a puzzle generated with program2


const robotPos = puzzle.robot;
puzzle = getSolution(program2,program2.F1,puzzle,robotPos);
puzzle2.board = puzzle.board;
puzzle3.board = puzzle.board;
let aPuzzle = puzzle2;
let aPuzzle2 = puzzle3;
let program = program2;

let tableau = ApplyFunctionFictif(program, program.F1 ,aPuzzle, nil, []);

export function getColorForHtml(Color) {
    switch (Color) {
    case 'b': return "blue";
    case 'B': return "blue";
    case 'g': return "green";
    case 'G': return "green";
    case 'r': return "red";
    case 'R': return "red";
    default:
        return "darkgray";
    }
}
function getIdForHtml(instruction, Color) {
    switch (instruction) {
    case forward : return `move up ${getColorForHtml(Color)}`;
    case right : return `move right ${getColorForHtml(Color)}`;
    case left: return `move left ${getColorForHtml(Color)}`;
    case CallF1: return `F1 ${getColorForHtml(Color)}`;
    case CallF2: return `F2 ${getColorForHtml(Color)}`;
    case CallF3: return `F3 ${getColorForHtml(Color)}`;
    default :
        return 0;
    }
}

function isDivId(divId) {
    switch (divId) {
    case "F1": return true;
    case "F2": return true;
    case "F3": return true;
    case "F4": return true;
    default:
        return false;
    } 
}

 function getArrow(instruction) {
    switch (instruction) {
    case forward: return "arrow up";
    case left: return "arrow left";
    case right: return "arrow right";
    case CallF1: return "F1";
    case CallF2: return "F2";
    case CallF3: return "F3";
    case CallF4: return "F4";
        
    default: return 0;
    }
 }

let Boards = ["visualizer_board","visualizer_board1","visualizer_board2","visualizer_board3"];
let i = 0;
let stack = nil;
let aBoardID = Boards[i];
let table = document.getElementById("table");
window.onload = () => {    
        let items = Object.keys(program);
        items.forEach(function(element){
            document.getElementById(element).style.display = "none";
            const values = program[element];
            values.forEach(function(ele){
                for (let j = 0; j < document.getElementById(element).children.length; j++) {
                    document.getElementById(element).children[j].style.display = "none";
                }
            }); 
        });
        let tbody1 = table.createTBody();
        tbody1.setAttribute('id',Boards[i]);
        aBoardID = Boards[i];
        fillBoard(aBoardID, aPuzzle2);
        addRobot(aPuzzle2.robot,aBoardID);
        items= Object.keys(program);
        items.forEach(function(element){
            document.getElementById(element).style.display = "";
            const values = program[element];
            values.forEach(function(ele){
                document.getElementById(element).children["empty"].style.display = "";
                
                document.getElementById(element).children["empty"].style.backgroundColor = getColorForHtml(ele[1]);
                if (isDivId(getArrow(ele[0]))) {
                    document.getElementById(element).children["empty"].textContent = getArrow(ele[0]);
                }else{
                    document.getElementById(element).children["empty"].children["me"].className += getArrow(ele[0]);
                }
                document.getElementById(element).children["empty"].id = getIdForHtml(ele[0], ele[1]);
            });
        });
        document.
        getElementById("play").
        addEventListener("click", () => { 
            ApplyFunction(program, program.F1, aPuzzle2, stack,aBoardID);
        });
    document.
        getElementById("move").
        addEventListener("click", () => {
                tableau = ExecuteOneByOne(tableau,aPuzzle2,aBoardID);
        });
};

