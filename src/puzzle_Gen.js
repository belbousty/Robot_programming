export function genPuzzle(type) {
        let puzzle;
        switch (type) {
        case "0":
        puzzle = {
            id:0,
            title:"0",
            about:"",
            robot : {col : 0, row : 3, dir : 3},
            subs:[3,3,0,0,0],
            allowedCommands:0,
            score: 3,
            board:['                ',
                   '                ', 
                   'brrrrrrrrRrrrRrg',
                   'b              G',
                   '                ',
                   '                ',
                   '                ',
                   '                ',
                   '                ',
                   '                ',
                   '                ',
                   '                ' ]
        };
            break;
        case "windmill" :
            puzzle = {
            id:1,
            title:"windmill",
            about:"",
            robot : {col : 8, row : 5, dir : 0},
            subs:[3,3,0,0,0],
            allowedCommands:0,
            score: 4,
            board:['                ',
                   '         B      ', 
                   '         b      ',
                   '        bb      ',
                   '    Bbb b       ',
                   '      bbrbb     ',
                   '        b bbB  ',
                   '       bb       ',
                   '       b        ',
                   '       B        ',
                   '                ',
                   '                ' ]
                
            };
            break;
        case "star":
        puzzle = {
            id:2,
            title:"star",
            about:"",
            robot : {col : 8, row : 5, dir : 0},
            subs:[3,3,0,0,0],
            allowedCommands:0,
            score: 4,
            board:[ '                ',
                    '                ',
                    '                ',
                    '        g       ',
                    '       rBr      ',
                    '      gBgBr     ',
                    '       rBr      ',
                    '        g       ',
                    '                ',
                    '                ',
                    '                ',
                    '                ' ]
        };
        break;
    case "mountains":
        puzzle = {
            id:3,
            title:"mountains",
            about:"",
            robot : {col : 0, row : 11, dir : 3},
            subs:[5,5,0,0,0],
            allowedCommands:0,
            score: 7,
            board:[ 'rbr rBr rBr rBr ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b g b g b g b g ',
                    'b rGr rGr rGr rG' ]
        };
        break;
        }
    return puzzle;
}
