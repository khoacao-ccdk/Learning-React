import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const NUM_COL = 3;
const NUM_ROW = 3;
const WIN = 3;

export default function TicTacToe() {
  const [board, setBoard] = React.useState<string[][]>([]);
  const [firstPlayerTurn, setFirstPlayerTurn] = React.useState<boolean>(true);
  const [firstPlayerWin, setFirstPlayerWin] = React.useState<boolean | null>(
    null
  );

  React.useEffect(() => {
    initBoard();
  }, []);

  function initBoard() {
    const board = new Array(NUM_ROW);
    for (let i = 0; i < NUM_ROW; i++) {
      board[i] = new Array(NUM_COL).fill("");
    }
    setBoard(board);
    setFirstPlayerTurn(true);
    setFirstPlayerWin(null);
  }

  function determineWinner(row: number, col: number) {
    let gainedRow = 0;

    // Check horizontally
    for (let i = 0; i < NUM_COL; i++) {
      if (board[row][i] === board[row][col]) {
        gainedRow++;
      }
    }

    let gainedCol = 0;
    // Check vertically
    for (let i = 0; i < NUM_ROW; i++) {
      if (board[i][col] === board[row][col]) {
        gainedCol++;
      }
    }

    // Check diagonally
    let gainedDiag = 0;
    for (let i = 0; i < NUM_COL; i++) {
      if (board[i][i] === board[row][col]) {
        gainedDiag++;
      }
    }

    if (gainedRow === WIN || gainedCol === WIN || gainedDiag === WIN) {
      setFirstPlayerWin(firstPlayerTurn);
    }
  }

  function handlePlayerTurn(row: number, col: number) {
    if (board[row][col] !== "") return;
    const newBoard = Array.from(board);
    newBoard[row][col] = firstPlayerTurn ? "X" : "O";

    setBoard(newBoard);
    setFirstPlayerTurn(!firstPlayerTurn);
    determineWinner(row, col);
  }

  return (
    <Stack spacing={1} alignItems="baseline">
      <Typography variant="h2">Tic-Tac-Toe</Typography>
      <Stack>
        {board.map((row, rowInd) => (
          <Stack key={rowInd} direction="row">
            {row.map((_col, colInd) => (
              <Box key={colInd} border="1px solid black">
                <Button
                  onClick={() => handlePlayerTurn(rowInd, colInd)}
                  sx={{
                    width: "10vw",
                    height: "10vh",
                  }}
                >
                  {board[rowInd][colInd]}
                </Button>
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
      <Typography>
        {firstPlayerWin === null
          ? ""
          : firstPlayerWin === true
          ? "1st player won"
          : "2nd player won"}{" "}
      </Typography>
      <Button variant="contained" onClick={() => initBoard()}>
        Reset
      </Button>
    </Stack>
  );
}
