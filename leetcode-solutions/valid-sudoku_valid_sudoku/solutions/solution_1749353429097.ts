        if(!isValidCol) return false;
    }

    for(let squareIdx = 0; squareIdx < BOARD_SIZE; ++squareIdx){
        const square = [];
        const startRow = Math.floor(squareIdx / (BOARD_SIZE/3))*(BOARD_SIZE/3);
        const startCol = (squareIdx % (BOARD_SIZE/3))*(BOARD_SIZE/3);
        for(let i = startRow; i < startRow + (BOARD_SIZE/3); ++i){
            for(let j = startCol; j < startCol + (BOARD_SIZE/3); ++j){
                square.push(board[i][j]);
            }
        }
        const isValidSquare = !hasDuplicate(square);
        if(!isValidSquare) return false;
    }

    return true;
        //console.log(square);