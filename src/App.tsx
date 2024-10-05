// import React, { useState } from "react";

import { useState } from "react";

type squareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square: React.FC<squareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

// X>O>X>Oにする。そのためには次がどっちなのかを都度判定する必要がある。

const Board = () => {
  // 盤面の状態を保存
  const [squares, setSquares] = useState(Array(9).fill(null));
  // 次のプレイヤー状態を保存
  const [isXNext, setIsXNext] = useState(true);

  // マスをクリックしたときに動く関数
  const onSquareClick = (i: number) => {
    if (squares[i] !== null) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
};

export default Board;

/*
Squareで管理するもの => 表示の受け皿とクリックイベントの設置
Boardで管理するもの => 次のプレーヤー、各盤面の状態

----
valueがいま一意になっている、このままだと全部Xor全部Oになる
SuareのレンダリングのタイミングでそれぞれのSquareを別のものとして設定したい
*/
