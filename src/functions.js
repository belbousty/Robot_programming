import { StackElement, StackisEmpty, UnstackElement, listDisp } from "./stack.js";


const icons = {
  robotEast:   { string: '\uEE00', color: 'pink' },
  robotSouth:  { string: '\uEE01', color: 'pink' },
  robotWest:   { string: '\uEE02', color: 'pink' },
  robotNorth:  { string: '\uEE03', color: 'pink' },
  star:        { string: '\uEE04', color: 'yellow' },
  disk:        { string: '\uEE05', color: 'red' },
  box:         { string: '\uEE06', color: 'red' },
  flash:       { string: '\uEE07', color: 'red' },
  heart:       { string: '\uEE08', color: 'red' },
  heartBroken: { string: '\uEE09', color: 'red' },
  lock:        { string: '\uEE0A', color: 'red' },
  lockOpen:    { string: '\uEE0B', color: 'red' },
  key:         { string: '\uEE0C', color: 'red' },
  droplet:     { string: '\uEE0D', color: 'red' },
  rocket:      { string: '\uEE0E', color: 'yellow' },
  empty:       { string: '\uEE0F', color: 'red' },
};


const robotID = "robot";

export function addStar(aCell) {
        aCell.innerText = icons.rocket.string;
        aCell.style.color = icons.rocket.color;
    }

    export function fillBoard(aBoardID, aPuzzle) {
        const tbody = document.getElementById(aBoardID);
        aPuzzle.board.forEach((aLine) => {
            const newRow = tbody.insertRow();
            aLine.split('').forEach((aChar) => {
                const newCell = newRow.insertCell();
                switch (aChar) {
                case 'r': newCell.className += " red_tile"; break;
                case 'g': newCell.className += " green_tile"; break;
                case 'b': newCell.className += " blue_tile"; break;
                case 'R': newCell.className += " red_tile"; addStar(newCell); break;
                case 'G': newCell.className += " green_tile"; addStar(newCell); break;
                case 'B': newCell.className += " blue_tile"; addStar(newCell); break;
                }
            });
        });
    }

// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
  // 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
  // 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
  // 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
  // D = droplet, E = rocket, F = empty

/*
  export function that creates a robot with custom values then returns it
  A robot has 4 keys : Robot = { col:y, row:x, dir:z }
*/

export function CreateRobot(col, row, dir){
    let robot = { col: col, row: row, dir: dir };
    return robot;
}


/*
  export function that moves the robot given in parametres forward
*/
export function forward(robot){
    switch (robot.dir) {
    case 1:
        return CreateRobot(robot.col, robot.row+1, robot.dir);
    case 0:
        return CreateRobot(robot.col+1, robot.row, robot.dir);    
    case 3:
        return CreateRobot(robot.col, robot.row-1, robot.dir);
    case 2:
        return CreateRobot(robot.col-1, robot.row, robot.dir);
    default:
        return robot;
    }
}

/*
  export function that turns the robot given in parametres to the right

*/

export function right(robot){
    return CreateRobot(robot.col, robot.row, (robot.dir+1)%4);
}

/*
  export function that turns the robot given in parametres to the left

*/
export function left(robot){
    return CreateRobot(robot.col, robot.row, (robot.dir-1 + 4)%4);
}

/*
  returns the first element in the array instruction that corresponds to export function of the instruction
*/

export function GetInstr(instruction){
  return instruction[0];
}

/*
  returns the second element in the array instruction that corresponds to the color of the instruction
*/

export function GetColor(instruction){
    return instruction[1];
}

export function CallF1(program) {
    return program.F1;
}

export function CallF2(program) {
    return program.F2;
}

export function CallF3(program) {
    return program.F3;
}

export function CallF4(program) {
    return program.F4;
}

export function CallF5(program) {
  return program.F5;
}
/*
  This export function is used to return the name of the export function to stack instead of stacking the implementation of the export function itself
*/

export function stackF(F) {
    switch (F) {
    case CallF1 : return 'F1';
    case CallF2 : return 'F2';
    case CallF3 : return 'F3';
    case CallF4 : return 'F4';
    case CallF5 : return 'F5';
    default :
        return false;
    }
}

export function getId(instruction) {
    switch (instruction) {
    case forward : return "move up";
    case right : return "move right";
    case left: return "move left";
    case CallF1: return "F1";
    case CallF2: return "F2";
    case CallF3: return "F3";

    default :
	return 0;
    }
}

export function getColor(Color) {
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

export function CopyBoard(board,row,col,str){
  let aCopyBoard = board.map((ele,i) => {
    return (ele.split('').map((char,j) => {
      if (i === row && j === col){
        return str;
      }
      else{
        return char;
      }
    }).join('')
  );});
  return aCopyBoard;
}

export function removeRobot() {
        const rCell = document.getElementById(robotID);
        rCell.removeAttribute('id');
        rCell.removeAttribute('style');
        rCell.innerText = icons.empty.string;
    }

export function addRobot(aRobot,aBoardID = "visualizer_board") {
    let aBoard = document.getElementById(aBoardID);
    let aCell  = aBoard.rows[aRobot.row].cells[aRobot.col];
    let anIcon = icons[Object.keys(icons)[aRobot.dir]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}

/*
  Returns the puzzle after application of instruction given in parametres
*/
export function ApplyInstr(instruction, puzzle,aBoardID){
    if (puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(instruction) || GetColor(instruction) === ' '
	|| puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(instruction).toUpperCase()) 
        puzzle.robot = GetInstr(instruction)(puzzle.robot);
    let ColorOfPos = puzzle.board[puzzle.robot.row][puzzle.robot.col];
    if (ColorOfPos !== ColorOfPos.toLowerCase()){
	puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,ColorOfPos.toLowerCase());
        puzzle.score = puzzle.score - 1;
    }
    let test = document.getElementById(aBoardID);
    if (test !== null){
	removeRobot();
	addRobot(puzzle.robot,aBoardID);
    }
    return puzzle;
}

/*
  This export function take an array in entry then apply the instructions 
*/

export function ApplyFunction(program, instr,puzzle, stack,aBoardID) {
    try {         
        instr.forEach((ele,i)=>{
            if (puzzle.board[puzzle.robot.row][puzzle.robot.col] !== " ")
            {
                if (stackF(ele[0]) !== false  &&
                    (GetColor(ele) === ' ' || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele)
                     || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele).toUpperCase()))
                {
                    ApplyFunction(program,ele[0](program),puzzle,StackElement(stack,[stackF(ele[0]),i]),aBoardID);
                }
                else
                {
                    puzzle=ApplyInstr(ele,puzzle,aBoardID);
                    if(puzzle.score === 0)
                        throw 'Break';
                }  
            } 
            else  {
                alert("Your robot is out :(");
            } 
        });
        return puzzle;
    }

    catch (e){
        if (e !== 'Break')
            throw e;
        return puzzle; 
    }
}

export function ApplyInstrFictif(instruction, puzzle){
  if (puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(instruction) || GetColor(instruction) === ' ' || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(instruction).toUpperCase()) 
            puzzle.robot = GetInstr(instruction)(puzzle.robot);
  let ColorOfPos = puzzle.board[puzzle.robot.row][puzzle.robot.col];
  if (ColorOfPos !== ColorOfPos.toLowerCase()){
      puzzle.board = CopyBoard(puzzle.board,puzzle.robot.row,puzzle.robot.col,ColorOfPos.toLowerCase());
          puzzle.score = puzzle.score - 1;
  }
  return puzzle;
}


export function ApplyFunctionStack(program, instr,puzzle, stack) {
  try {         
      instr.forEach((ele,i)=>{
          if (puzzle.board[puzzle.robot.row][puzzle.robot.col] !== " ")
          {
              if (stackF(ele[0]) !== false  &&
                  (GetColor(ele) === ' ' || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele)
                   || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele).toUpperCase()))
              {
                  if( !(StackisEmpty(stack)))
                  {
                      UnstackElement(stack);
                      console.log(listDisp(stack));       
                  }
                  if (stackF(ele) !== false){ 
                    console.log(listDisp(StackElement(stack,[stackF(ele),i])));
                  }
                  ApplyFunctionStack(program,ele[0](program),puzzle,StackElement(stack,[stackF(ele[0]),i]));
                  if( !(StackisEmpty(stack)))
                  {
                      UnstackElement(stack);
                      console.log(listDisp(stack));
                  }
              }
              else
              {
                  puzzle=ApplyInstrFictif(ele,puzzle);
                  if(puzzle.score === 0)
                      throw 'Break';
              }  
          } 
          else  {
              alert("Your robot is out :(");
          } 
      });
      return puzzle;
  }

  catch (e){
      if (e !== 'Break')
          throw e;
      return puzzle; 
  }
}


/*
This export function take an array in entry then apply the instructions 
*/

export function ApplyFunctionFictif(program, instr,puzzle, stack,tableau) {
  try {         
      instr.forEach((ele,i)=>{
          if (puzzle.board[puzzle.robot.row][puzzle.robot.col] !== " ")
          {
              if (stackF(ele[0]) !== false  &&
                  (GetColor(ele) === ' ' || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele)
                   || puzzle.board[puzzle.robot.row][puzzle.robot.col] === GetColor(ele).toUpperCase()))
              {
                  tableau = ApplyFunctionFictif(program,ele[0](program),puzzle,StackElement(stack,[stackF(ele[0]),i]),tableau);
              }
              else
              {
                  tableau = tableau.concat(ele);
                  puzzle=ApplyInstrFictif(ele,puzzle);
                  if(puzzle.score === 0)
                      throw 'Break';
              }  
          } 
          else  {
              alert("Your robot is out :(");
          } 
      });
      return tableau;
  }

  catch (e){
      if (e !== 'Break')
          throw e;
      return tableau; 
  }
}

export function ExecuteOneByOne(tableau,puzzle,aBoardID){
    if (tableau.length !== 0){
	let elt1 = tableau.shift();
	let elt2 = tableau.shift();
	let tab = [];
	tab = tab.concat(elt1,elt2);
	ApplyInstr(tab,puzzle,aBoardID);
	return tableau;
    }
}


export function clearBoard(id){
    let tbody = document.getElementById(id);
    tbody.parentNode.removeChild(tbody);
}
