import { ApplyInstr ,forward, left, right,ApplyFunction , CallF2, CallF3} from "./functions";
import { nil } from "./stack";



let puzzle = {
    id:644,
    title:"Right on red",
    about:"",
    score: 1,
    robot : {col : 7, row : 6, dir : 0},
    subs:[5,4,0,0,0],
    allowedCommands:0,
    board: [ '                ',
                 '                ',
                 '                ',
                 '     gbbbbbbg   ',
                 '     b      b   ',
                 '     b      b   ',
                 '     b bbbbbg   ',
                 '     b          ',
                 '   B grg        ',
                 '   b  b         ',
                 '   gbbg         ',
                 '                ' ],
  };
  

let program1 = {F1 : [[forward,' '], [right,' '], [CallF2,' '] ], F2 : [[right,' '],[forward,' '],[CallF3,' ']], F3 : [[right,' ']]};

let stack = nil;



    describe('tests of instructions on robots',() => {
        test('robot moved forward',() => {
        puzzle.robot = forward(forward(puzzle.robot));
        expect(puzzle.robot.col).toBe(9);});
        
        test('robot moved right successfully',()=>{
        puzzle.robot = right(puzzle.robot);
        expect(puzzle.robot.dir).toBe(1);});
        test('robot moved left successfully',()=>{
        puzzle.robot = left(puzzle.robot);
        expect(puzzle.robot.dir).toBe(0);});

        test('ApplyInstruction on forward',()=>{
            ApplyInstr(([forward,' ']),puzzle);
            expect(puzzle.robot.dir).toBe(0);
            expect(puzzle.robot.col).toBe(10);});

        test('ApplyFunction on empty program',()=>{
        let program2={F1 : []};
        ApplyFunction(program2,program2.F1,puzzle,stack);
        expect(puzzle.robot.dir).toBe(0);
        expect(puzzle.robot.col).toBe(10);
        expect(puzzle.robot.row).toBe(6);});

        test('ApplyFunction on [forward,right,F2] with F2=[right,forward,F3] and F3=[right]',()=>{
        ApplyFunction(program1,program1.F1,puzzle,stack);
        expect(puzzle.robot.dir).toBe(3);
        expect(puzzle.robot.col).toBe(10);
        expect(puzzle.robot.row).toBe(6);});
        test('ApplyFunction on [left,forward]',()=>{
        let program2={F1 : [[left,' '],[forward,' ']]};
        ApplyFunction(program2,program2.F1,puzzle,stack);
        expect(puzzle.robot.dir).toBe(2);
        expect(puzzle.robot.col).toBe(9);
        expect(puzzle.robot.row).toBe(6);});
        test('ApplyFunction on [left,F2,forward]',()=>{
        let program2={F1 : [[right,' '],[CallF2,' '],[right,' ']], F2: [[right,' ']]};
        ApplyFunction(program2,program2.F1,puzzle,stack);
        expect(puzzle.robot.dir).toBe(1);
        expect(puzzle.robot.col).toBe(9);
        expect(puzzle.robot.row).toBe(6);});    
        });
    
    
