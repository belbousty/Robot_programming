import {
    stackF,
    GetColor,
    GetInstr,
    CopyBoard,
    forward,
} from "./functions.js";


function move(ele,puzzle){
    puzzle.robot = GetInstr(ele)(puzzle.robot);
    return puzzle;
}
const colors = ['b','b','b','g','r'];


/*
  Returns a puzzle with initial robot position in robotPos that can be solved with the program given as an argument 
*/
export function getSolution(program,instr,puzzle,count,robotPos) {
    try{       
        instr.forEach((ele,i)=>{
            if (stackF(ele[0]) !== false)
            {
                if (GetColor(ele) === ' '){
                    getSolution(program,ele[0](program),puzzle,count,robotPos);
                }
                else{
                    puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,GetColor(ele));
                    getSolution(program,ele[0](program),puzzle,count,robotPos);
                }
            }
            else
            {
                if(puzzle.robot.row === 12){
                    puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row-1,puzzle.robot.col,puzzle.board[puzzle.robot.row-1][puzzle.robot.col].toUpperCase());          
                    puzzle.robot = robotPos;
                    throw 'Break';
                }
                if(puzzle.robot.col === 16){
                    puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col-1,puzzle.board[puzzle.robot.row][puzzle.robot.col-1].toUpperCase());
                    puzzle.robot = robotPos;
                    throw 'Break';
                }
                else{
                    if (GetInstr(ele) === forward && puzzle.board[puzzle.robot.row][puzzle.robot.col] === ' '){
                        if (GetColor(ele) === ' '){
                            puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,colors[0]);
                        }
                        else{
                            puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,GetColor(ele));
                        }
                        puzzle = move(ele,puzzle);
                    }
                    else{
                        if (GetColor(ele) === ' ' && puzzle.board[puzzle.robot.row][puzzle.robot.col] === ' '){       
                            puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,colors[0]);
                        }
                        else{
                            if(puzzle.board[puzzle.robot.row][puzzle.robot.col] === ' '){
                                puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,GetColor(ele));
                            }
                        }
                        puzzle = move(ele,puzzle);
                    }
                }
            } 
        });
        puzzle.robot = robotPos;
        return puzzle;
    }
    catch (e){
        if (e !== 'Break')
            throw e;
        return puzzle; 
    }
}
