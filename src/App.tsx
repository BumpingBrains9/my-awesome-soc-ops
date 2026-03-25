import { useBingoGame } from "./hooks/useBingoGame";
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";

function App() {
  const {
    gameState,
    startGame,
    drawCard,
    currentCard,
    remainingCards,
    totalCards,
    resetGame,
  } = useBingoGame();

  if (gameState === "start") {
    return <StartScreen onStart={startGame} />;
  }

  return (
    <GameScreen
      currentCard={currentCard}
      remainingCards={remainingCards}
      totalCards={totalCards}
      onDrawCard={drawCard}
      onReset={resetGame}
    />
  );
}

export default App;
