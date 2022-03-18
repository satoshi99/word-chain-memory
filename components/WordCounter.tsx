import { Box, Flex, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { numberOfWords, wordChainList } from '../lib/recoil-atoms';

export const WordCounter = () => {
  const numWords = useRecoilValue(numberOfWords);
  const wordList = useRecoilValue(wordChainList);
  const step = wordList.length;

  return (
    <Flex
      direction="column"
      fontSize="2xl"
      bgColor="teal.800"
      shadow="2xl"
      p="3"
      position="absolute"
      top="5"
      left="5"
    >
      <Text>{step}</Text>
      <Box w="14" borderBottom="1px" />
      <Text>{numWords}</Text>
    </Flex>
  );
};
