import { atom } from 'recoil';

export const numberOfWords = atom({
  key: 'numberOfWords',
  default: 10
});

export const wordChainList = atom<String[]>({
  key: 'wordChainList',
  default: []
});
