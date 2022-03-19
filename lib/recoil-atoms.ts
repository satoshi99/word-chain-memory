import { atom } from 'recoil';

type GameStep = {
  value: 'forward' | 'backward' | 'result';
};

export const numberOfWords = atom({
  key: 'numberOfWords',
  default: 10
});

export const wordChainList = atom<String[]>({
  key: 'wordChainList',
  default: []
});

export const recallWordList = atom<String[]>({
  key: 'recallWordList',
  default: []
});

export const gameStep = atom<GameStep>({
  key: 'gameStep',
  default: { value: 'forward' }
});
