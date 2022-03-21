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

export const chainListLength = selector({
  key: 'chainListLength',
  get: ({ get }) => {
    const wordList = get(wordChainList);
    return wordList.length;
  }
});

export const recallWordList = atom<String[]>({
  key: 'recallWordList',
  default: []
});

export const recallListLength = selector({
  key: 'recallListLength',
  get: ({ get }) => {
    const wordList = get(recallWordList);
    return wordList.length;
  }
});

export const gameStep = atom<GameStep>({
  key: 'gameStep',
  default: { value: 'chain' }
});
