import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { numberOfWords, wordChainList } from '../lib/recoil-atoms';

export const WordCounter = () => {
  const numWords = useRecoilValue(numberOfWords);
  const wordList = useRecoilValue(wordChainList);
  const count = wordList.length;

  return (
    <Flex direction="column" position="absolute" top="5" left="5">
      <CircularProgress
        max={numWords}
        value={count}
        size="24"
        color="teal.300"
      />
      <CircularProgressLabel fontSize="2xl">
        <Text fontSize="4xl" color="teal.300">
          {count}
        </Text>
      </CircularProgressLabel>
    </Flex>
  );
};
