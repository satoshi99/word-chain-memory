import { atom, selector } from 'recoil';

type GameStep = {
  value: 'chain' | 'recall' | 'result';
};

export const numberOfWords = atom({
  key: 'numberOfWords',
  default: 10
});

export const wordChainList = atom<String[]>({
  key: 'wordChainList',
  default: []
});

export const copyWordChainList = selector({
  key: 'copyWordChainList',
  get: ({ get }) => {
    const wordList = get(wordChainList);
    return [...wordList];
  }
});

export const wordChainListStats = selector({
  key: 'wordChainListStats',
  get: ({ get }) => {
    const wordList = get(wordChainList);
    return wordList.length;
  }
});

export const recallWordList = atom<String[]>({
  key: 'recallWordList',
  default: []
});

export const recallWordListStats = selector({
  key: 'recallWordListStats',
  get: ({ get }) => {
    const wordList = get(recallWordList);
    return wordList.length + 1;
  }
});

export const gameStep = atom<GameStep>({
  key: 'gameStep',
  default: { value: 'chain' }
});
