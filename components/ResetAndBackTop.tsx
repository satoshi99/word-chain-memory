import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import {
  gameStep,
  numberOfWords,
  recallWordList,
  wordChainList
} from '../lib/recoil-atoms';

export const ResetAndBackTop = () => {
  const router = useRouter();
  const resetGameStep = useResetRecoilState(gameStep);
  const resetWordChainList = useResetRecoilState(wordChainList);
  const resetNumberOfWords = useResetRecoilState(numberOfWords);
  const resetRecallWordList = useResetRecoilState(recallWordList);

  const onClick = () => {
    resetGameStep();
    resetNumberOfWords();
    resetWordChainList();
    resetRecallWordList();
    router.push('/');
  };

  return (
    <Button variant="outline" onClick={onClick} position="absolute" bottom="10">
      Back to Top
    </Button>
  );
};
