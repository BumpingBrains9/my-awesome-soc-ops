import { useState, useCallback, useMemo, useEffect } from "react";
import type { GameState } from "../types";
import { questions } from "../data/questions";

export interface BingoGameState {
  gameState: GameState;
  currentCard: string | null;
  remainingCards: number;
  totalCards: number;
}

export interface BingoGameActions {
  startGame: () => void;
  drawCard: () => void;
  resetGame: () => void;
}

const STORAGE_KEY = "card-deck-shuffle-state";
const STORAGE_VERSION = 1;

interface StoredGameData {
  version: number;
  gameState: GameState;
  currentCard: string | null;
  deckOrder: number[];
  nextCardIndex: number;
}

function validateStoredData(data: unknown): data is StoredGameData {
  if (!data || typeof data !== "object") {
    return false;
  }

  const obj = data as Record<string, unknown>;

  if (obj.version !== STORAGE_VERSION) {
    return false;
  }

  if (
    typeof obj.gameState !== "string" ||
    !["start", "playing"].includes(obj.gameState)
  ) {
    return false;
  }

  if (obj.currentCard !== null && typeof obj.currentCard !== "string") {
    return false;
  }

  if (
    !Array.isArray(obj.deckOrder) ||
    obj.deckOrder.some((entry) => typeof entry !== "number")
  ) {
    return false;
  }

  if (typeof obj.nextCardIndex !== "number") {
    return false;
  }

  return true;
}

function createShuffledDeck(): number[] {
  const deck = questions.map((_, index) => index);

  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }

  return deck;
}

function loadGameState():
  | (Pick<BingoGameState, "gameState" | "currentCard"> & {
      deckOrder: number[];
      nextCardIndex: number;
    })
  | null {
  // SSR guard
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return null;
    }

    const parsed = JSON.parse(saved);

    if (validateStoredData(parsed)) {
      return {
        gameState: parsed.gameState,
        currentCard: parsed.currentCard,
        deckOrder: parsed.deckOrder,
        nextCardIndex: parsed.nextCardIndex,
      };
    } else {
      console.warn("Invalid game state data in localStorage, clearing...");
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.warn("Failed to load game state:", error);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return null;
}

function saveGameState(
  gameState: GameState,
  currentCard: string | null,
  deckOrder: number[],
  nextCardIndex: number,
): void {
  // SSR guard
  if (typeof window === "undefined") {
    return;
  }

  try {
    const data: StoredGameData = {
      version: STORAGE_VERSION,
      gameState,
      currentCard,
      deckOrder,
      nextCardIndex,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Failed to save game state:", error);
  }
}

export function useBingoGame(): BingoGameState & BingoGameActions {
  const loadedState = useMemo(() => loadGameState(), []);

  const [deckOrder, setDeckOrder] = useState<number[]>(
    () => loadedState?.deckOrder || [],
  );
  const [nextCardIndex, setNextCardIndex] = useState<number>(
    () => loadedState?.nextCardIndex || 0,
  );
  const [gameState, setGameState] = useState<GameState>(
    () => loadedState?.gameState || "start",
  );
  const [currentCard, setCurrentCard] = useState<string | null>(
    () => loadedState?.currentCard || null,
  );

  const remainingCards = useMemo(() => {
    if (gameState !== "playing") {
      return questions.length;
    }

    const cardsLeft = deckOrder.length - nextCardIndex;
    return cardsLeft >= 0 ? cardsLeft : 0;
  }, [deckOrder.length, gameState, nextCardIndex]);

  const totalCards = questions.length;

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    saveGameState(gameState, currentCard, deckOrder, nextCardIndex);
  }, [gameState, currentCard, deckOrder, nextCardIndex]);

  const startGame = useCallback(() => {
    setDeckOrder(createShuffledDeck());
    setNextCardIndex(0);
    setCurrentCard(null);
    setGameState("playing");
  }, []);

  const drawCard = useCallback(() => {
    if (gameState !== "playing") {
      return;
    }

    const activeDeck =
      nextCardIndex >= deckOrder.length ? createShuffledDeck() : deckOrder;
    const activeIndex = nextCardIndex >= deckOrder.length ? 0 : nextCardIndex;
    const questionIndex = activeDeck[activeIndex];

    setDeckOrder(activeDeck);
    setCurrentCard(questions[questionIndex]);
    setNextCardIndex(activeIndex + 1);
  }, [gameState, nextCardIndex, deckOrder]);

  const resetGame = useCallback(() => {
    setGameState("start");
    setDeckOrder([]);
    setNextCardIndex(0);
    setCurrentCard(null);
  }, []);

  return {
    gameState,
    currentCard,
    remainingCards,
    totalCards,
    startGame,
    drawCard,
    resetGame,
  };
}
