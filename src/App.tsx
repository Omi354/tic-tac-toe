import React from "react";
import Game from "./Game.tsx"; // デフォルトエクスポートなのでファイル名でインポート可能

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

export default App;
