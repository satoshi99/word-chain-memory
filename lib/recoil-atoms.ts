import { atom } from 'recoil';

export const numberOfWords = atom({
  key: 'numberOfWords',
  default: 10
});

export const wordList = atom({
  key: 'wordList',
  default: []
});
