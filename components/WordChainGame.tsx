import { Button, Heading, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { numberOfWords } from '../lib/recoil-atoms';

export const WordChainGame = () => {
  const numWords = useRecoilValue(numberOfWords);
  return (
    <Stack direction="column" align="center" justify="center">
      <Heading>{numWords}</Heading>
      <Heading fontSize="6xl">a Word</Heading>
      <Stack direction="column">
        <Input type="text" />
        <Button colorScheme="teal">Answer</Button>
      </Stack>
    </Stack>
  );
};
