import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type GameStep = {
  value: 'chain' | 'recall' | 'result';
};

type GameResultStas = {
  correctNum: number;
};

export const numberOfWords = atom<number>({
  key: 'numberOfWords',
  default: 10,
  effects_UNSTABLE: [persistAtom]
});

export const wordChainList = atom<string[]>({
  key: 'wordChainList',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const chainListLength = selector<number>({
  key: 'chainListLength',
  get: ({ get }) => {
    const wordList = get(wordChainList);
    return wordList.length;
  }
});

export const recallWordList = atom<string[]>({
  key: 'recallWordList',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const totalMistakeNum = atom<number>({
  key: 'totalMistakeNum',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const gameResultStats = selector<GameResultStas>({
  key: 'gameResultStats',
  get: ({ get }) => {
    const recallList = get(recallWordList);
    const incorrectNum = recallList.filter(
      (value) => value === 'incorrect'
    ).length;
    const correctNum = recallList.length - incorrectNum;
    return { correctNum };
  }
});

export const gameStep = atom<GameStep>({
  key: 'gameStep',
  default: { value: 'chain' },
  effects_UNSTABLE: [persistAtom]
});
