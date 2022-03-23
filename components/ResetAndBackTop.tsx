import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import {
  gameStep,
  numberOfWords,
  recallWordList,
  totalMistakeNum,
  wordChainList
} from '../lib/recoil-atoms';

export const ResetAndBackTop = () => {
  const router = useRouter();
  const resetGameStep = useResetRecoilState(gameStep);
  const resetWordChainList = useResetRecoilState(wordChainList);
  const resetNumberOfWords = useResetRecoilState(numberOfWords);
  const resetRecallWordList = useResetRecoilState(recallWordList);
  const resetTotalMistakeNum = useResetRecoilState(totalMistakeNum);

  const onClick = () => {
    resetGameStep();
    resetNumberOfWords();
    resetWordChainList();
    resetRecallWordList();
    resetTotalMistakeNum();
    router.push('/');
  };

  return (
    <Button variant="outline" onClick={onClick} mt="36">
      Back to Top
    </Button>
  );
};
