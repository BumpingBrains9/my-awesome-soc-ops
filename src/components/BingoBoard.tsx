import type { BingoSquareData } from "../types";
import { BingoSquare } from "./BingoSquare";

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({
  board,
  winningSquareIds,
  onSquareClick,
}: BingoBoardProps) {
  return (
    <div className="w-full max-w-md rounded-[1.65rem] border border-accent-light/45 bg-surface/75 p-2 shadow-[0_0_0_1px_#ffffff1a,0_20px_55px_#10041d96] backdrop-blur-sm">
      <div className="grid grid-cols-5 gap-1.5 aspect-square">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
