import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { chainListLength, wordChainList } from '../lib/recoil-atoms';

export const ChainNav = () => {
  const chainLength = useRecoilValue(chainListLength);
  const chainList = useRecoilValue(wordChainList);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const getAlphabet = () => {
    const idx = Math.floor(Math.random() * (alphabet.length - 1));
    return alphabet[idx];
  };

  return (
    <Flex direction="column" align="center" pt="32">
      <Text>
        {chainLength
          ? 'Enter a word that begin from the first letter of the word below.'
          : 'Start with an alphabet below.'}
      </Text>
      <Heading
        fontSize={{ base: '5xl', sm: '6xl', md: '7xl' }}
        mt="5"
        mb="10"
        w="100vw"
      >
        {chainLength ? chainList[chainLength - 1] : getAlphabet()}
      </Heading>
    </Flex>
  );
};
