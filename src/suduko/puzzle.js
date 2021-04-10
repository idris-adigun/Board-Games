
import sudoku from 'sudoku';

/*
Generate sudoku puzzle 

Suduko board to be used structure: {tile: [
  {
    index: 0,
    row: 0,
    col: 0,
    value: 1,
    readonly: true
    valid: true | false | empty true if value is valid, false if it's not valid and empty if the field is empty
  }
]}
*/
const Puzzle = {

    generatePuzzle(){
        const unsolvedPuzzle = sudoku.makepuzzle().map(element => (
          element !== null ? element +1 : null
        ));
        const board = []
        for(let i=0; i<9; i++){
          for(let j = 0; j<9; j++){
            const value = unsolvedPuzzle[i * 9 + j]
            const tile = {
              index: i* 9 + j,
              row: i,
              col: j, 
              value: value,
              valid: value ? true : 'empty',
              readonly: value !== null
            };
            board.push(tile)
          }
        }
        return board;
      },
    
    
      solvePuzzle(board){
        let puzzle = []
        board.map((tile) =>
            puzzle.push(tile.value !== null ? tile.value -1 : null)
        )
        let solved = sudoku.solvepuzzle(puzzle).map(element => (
            element + 1
          ));
        return solved
      }
    
}

export default Puzzle
